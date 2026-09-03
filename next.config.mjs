/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/studio/faq", destination: "/studio", permanent: true },
      { source: "/studio/process", destination: "/studio", permanent: true },
      { source: "/work/in-progress", destination: "/work", permanent: true },
      { source: "/work/monroe-street-townhouse", destination: "/work/townhouse-renovation", permanent: true },
      { source: "/work/logan-circle-kitchen", destination: "/work/kitchen-remodel", permanent: true },
      { source: "/work/georgetown-bathroom", destination: "/work/bathroom-remodel", permanent: true },
      { source: "/work/shaw-basement", destination: "/work/basement-renovation", permanent: true },
      { source: "/work/capitol-hill-microcement", destination: "/work/microcement-surfaces", permanent: true },
    ];
  },
};
export default nextConfig;
