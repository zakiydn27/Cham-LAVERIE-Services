/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // biar gambar muncul di GitHub Pages
  },
  basePath: '/Cham-LAVERIE-Services', // nama repo GitHub
  assetPrefix: '/Cham-LAVERIE-Services/', // prefix untuk aset statis
};

export default nextConfig;
