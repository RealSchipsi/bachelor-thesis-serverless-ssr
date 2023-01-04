/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST_URL: "CLOUDFRONT_DISTRIBUTION_URL",
    MONGODB_URI:
      "MONGO_DB_URI",
    JWT_KEY: "JWT_KEY",
  },
  images: {
    domains: ["https://i.ibb.co/"],
  },
};

module.exports = nextConfig;
