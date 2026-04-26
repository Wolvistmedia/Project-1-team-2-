const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.56.1'],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;