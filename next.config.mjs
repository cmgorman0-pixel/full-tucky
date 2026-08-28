/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Product photos uploaded to a product in the Stripe dashboard.
      { protocol: "https", hostname: "files.stripe.com" },
      { protocol: "https", hostname: "d1wqzb5bdbcre6.cloudfront.net" },
    ],
  },
};

export default nextConfig;
