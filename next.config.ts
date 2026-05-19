import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? "/thai-idol-site" : "",
  assetPrefix: isGithubPages ? "/thai-idol-site/" : undefined
};

export default nextConfig;
