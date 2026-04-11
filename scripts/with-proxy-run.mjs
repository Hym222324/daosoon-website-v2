/**
 * Runs fetch-stitch-screen.mjs with HTTP(S)_PROXY set.
 * Default proxy: http://127.0.0.1:7890 (override with STITCH_FETCH_PROXY).
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const proxy = (process.env.STITCH_FETCH_PROXY ?? "http://127.0.0.1:7890").trim();
const env = {
  ...process.env,
  HTTP_PROXY: proxy,
  HTTPS_PROXY: proxy,
};
console.log("[with-proxy-run] HTTP_PROXY / HTTPS_PROXY =", proxy, "\n");

const r = spawnSync(process.execPath, ["scripts/fetch-stitch-screen.mjs"], {
  cwd: root,
  env,
  stdio: "inherit",
});
process.exit(r.status === null ? 1 : r.status);
