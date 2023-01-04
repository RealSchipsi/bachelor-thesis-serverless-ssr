/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST_URL_: "https://d1fje5s5cr9ixm.cloudfront.net",
    HOST_URL: "http://localhost:3000",
    MONGODB_URI:
      "mongodb+srv://mongo-admin:Xm32Euv7@cluster0.isjyv5s.mongodb.net/?retryWrites=true&w=majority",
    JWT_KEY: "gkP6y9ZQtmUe1FjIu46WQwWAN8MzqvKT",
  },
  images: {
    domains: ["https://i.ibb.co/"],
  },
};

module.exports = nextConfig;
