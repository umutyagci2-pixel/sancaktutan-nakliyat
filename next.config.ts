import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tamamen statik export — Cloudflare Pages gibi statik hostlara yüklenir.
  output: "export",
  // Statik export'ta görsel optimizasyon sunucusu olmadığı için kapatılır.
  images: { unoptimized: true },
};

export default nextConfig;
