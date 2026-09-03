/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/studio/faq", destination: "/studio", permanent: true },
      { source: "/studio/process", destination: "/studio", permanent: true },
    ];
  },
};
export default nextConfig;
