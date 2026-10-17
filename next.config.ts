import type { NextConfig } from "next";
import { blogMoves, pageMoves } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Fully static site: the Cache Components model adds Suspense requirements with no benefit here.
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // The old /bathroom-remodeling/ post moves into the blog; the new service page takes the root URL.
      ...blogMoves
        .filter((s) => s !== "bathroom-remodeling")
        .map((s) => ({ source: `/${s}/`, destination: `/blog/${s}/`, permanent: true })),
      ...pageMoves.map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: "/category/:path*", destination: "/blog/", permanent: true },
      { source: "/tag/:path*", destination: "/blog/", permanent: true },
      { source: "/author/:path*", destination: "/about/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/wp-json/:path*", destination: "/", permanent: false },
      { source: "/wp-content/:path*", destination: "/projects/", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
