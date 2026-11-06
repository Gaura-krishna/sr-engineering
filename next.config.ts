import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 1,
  },
  outputFileTracingRoot: path.join(__dirname, "../"),
};

export default nextConfig;
