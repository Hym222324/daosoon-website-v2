/**
 * Fetch Stitch screen screenshot + HTML export URLs, download to public/stitch-import/.
 *
 * Usage:
 *   export STITCH_API_KEY="your-key"
 *   npm run fetch:stitch
 *
 * With local HTTP proxy (Clash / Surge 等)，默认 http://127.0.0.1:7890：
 *   npm run fetch:stitch:proxy
 * 或指定端口：
 *   STITCH_FETCH_PROXY=http://127.0.0.1:15236 npm run fetch:stitch:proxy
 *
 * If MCP connect times out (e.g. China / IPv6):
 *   - Default: prefer IPv4 DNS (disable with STITCH_DNS_IPV4FIRST=0)
 *   - Try: export HTTPS_PROXY=http://127.0.0.1:7890  (your proxy)
 *   - Or paste signed URLs from Stitch / Cursor MCP:
 *       export STITCH_IMAGE_URL='https://...'
 *       export STITCH_HTML_URL='https://...'
 *     then: npm run fetch:stitch   (no API key needed for download-only path)
 *
 * Optional: STITCH_PROJECT_ID, STITCH_SCREEN_ID, REMOVE_WHITE_BG=1
 */

import { spawnSync } from "node:child_process";
import dns from "node:dns";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Stitch, StitchToolClient } from "@google/stitch-sdk";

if (process.env.STITCH_DNS_IPV4FIRST !== "0") {
  try {
    dns.setDefaultResultOrder("ipv4first");
    console.log("[stitch-fetch] DNS: prefer IPv4 first (set STITCH_DNS_IPV4FIRST=0 to disable)\n");
  } catch {
    /* older Node */
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "stitch-import");

const PROJECT_ID = process.env.STITCH_PROJECT_ID ?? "12973280227747845171";
const SCREEN_ID = process.env.STITCH_SCREEN_ID ?? "0b2517ac5d6c4189870235d5cb11592d";

/** Use curl so connect timeout can exceed Node fetch’s ~10s default on some systems */
function download(url, dest) {
  const r = spawnSync(
    "curl",
    ["-fSL", "--connect-timeout", "120", "--max-time", "600", "-o", dest, url],
    { encoding: "utf-8" },
  );
  if (r.error) throw r.error;
  if (r.status !== 0) {
    throw new Error(`curl failed (exit ${r.status}): ${(r.stderr || r.stdout || "").slice(0, 800)}`);
  }
  const n = fs.statSync(dest).size;
  console.log("Wrote", dest, `(${n} bytes)`);
}

fs.mkdirSync(outDir, { recursive: true });
const base = path.join(outDir, `screen-${SCREEN_ID}`);

const manualImage = process.env.STITCH_IMAGE_URL?.trim();
const manualHtml = process.env.STITCH_HTML_URL?.trim();

if (manualImage && manualHtml) {
  console.log("[stitch-fetch] Using STITCH_IMAGE_URL / STITCH_HTML_URL (manual download only)\n");
  download(manualImage, `${base}.png`);
  download(manualHtml, `${base}.html`);
} else {
  if (!process.env.STITCH_API_KEY?.trim()) {
    console.error("Missing STITCH_API_KEY (or set both STITCH_IMAGE_URL and STITCH_HTML_URL for download-only).");
    process.exit(1);
  }

  const clientOpts = {
    apiKey: process.env.STITCH_API_KEY,
    timeout: Number(process.env.STITCH_MCP_TIMEOUT_MS ?? 600_000),
  };
  if (process.env.STITCH_HOST?.trim()) {
    clientOpts.baseUrl = process.env.STITCH_HOST.trim();
  }
  const client = new StitchToolClient(clientOpts);
  const sdk = new Stitch(client);

  let imageUrl;
  let htmlUrl;
  try {
    const project = sdk.project(PROJECT_ID);
    const screen = await project.getScreen(SCREEN_ID);
    imageUrl = await screen.getImage();
    htmlUrl = await screen.getHtml();
  } catch (e) {
    console.error("\n[stitch-fetch] MCP / Stitch API failed:", e?.message ?? e);
    console.error(`
Troubleshooting:
  1) Network to stitch.googleapis.com (VPN / office firewall / region).
  2) export HTTPS_PROXY=http://HOST:PORT  if you use a local proxy.
  3) This script already prefers IPv4 DNS; try another network or tethering.
  4) Download-only: in Cursor with Stitch MCP, get signed image + HTML URLs, then:
       export STITCH_IMAGE_URL='...'
       export STITCH_HTML_URL='...'
     npm run fetch:stitch
`);
    try {
      await client.close();
    } catch {
      /* ignore */
    }
    process.exit(1);
  }

  console.log("Stitch export URLs (may expire; re-run to refresh):\n");
  console.log("Image:\n", imageUrl, "\n");
  console.log("HTML:\n", htmlUrl, "\n");
  console.log("curl --connect-timeout 120 -L -o stitch-screen.png \\\n  '" + imageUrl + "'\n");
  console.log("curl --connect-timeout 120 -L -o stitch-screen.html \\\n  '" + htmlUrl + "'\n");

  download(imageUrl, `${base}.png`);
  download(htmlUrl, `${base}.html`);

  try {
    await client.close();
  } catch {
    /* ignore */
  }
}

if (process.env.REMOVE_WHITE_BG === "1") {
  const sharp = (await import("sharp")).default;
  const input = `${base}.png`;
  const output = `${base}-transparent.png`;
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const c = info.channels;
  if (c !== 4) throw new Error(`Expected RGBA after ensureAlpha, got ${c} channels`);
  const thr = 248;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r >= thr && g >= thr && b >= thr) {
      data[i + 3] = 0;
    }
  }
  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(output);
  console.log("Wrote", output, "(white→transparent, threshold " + thr + ")");
}

console.log("\nDone. Files under public/stitch-import/ — point Header/Footer img src in src/lib/site-logo.ts after review.");
