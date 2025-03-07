import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    // Desactivar reglas específicas si lo necesitas
    dirs: ['src'], // Si tus archivos están dentro de `src`
  },
};

export default nextConfig;

