import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
    basePath: "/zappo-sports",
    assetPrefix: "/zappo-sports/",
};

export default nextConfig;
