import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // NOTE: Image optimization requires a server. Since this project uses static
  // export, images are kept unoptimized here. Heavy images are manually
  // converted to WebP via the build script (scripts/convert-images.mjs).
  // To enable full Next.js Image Optimization, remove `output: "export"` and
  // deploy to Vercel or a Node.js server.
  images: { unoptimized: true },

  // Reduce bundle size by tree-shaking large icon/animation libraries
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Silence the "X-Powered-By" header (minor security + perf)
  poweredByHeader: false,

  // Enable React strict mode for better dev-time warnings
  reactStrictMode: true,

  // Compress responses
  compress: true,
};

export default nextConfig;
