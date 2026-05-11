/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/ventures/puppy-trainer",
        destination: "/ventures/pupwell",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
