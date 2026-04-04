import type { NextConfig } from "next";

/** GitHub project page: https://<user>.github.io/<repo>/ */
const GITHUB_REPO = "daosoon-website-v2";

const useGithubPages =
  process.env.GITHUB_PAGES === "true" || process.env.CF_PAGES === "1";

const basePath = useGithubPages ? `/${GITHUB_REPO}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
