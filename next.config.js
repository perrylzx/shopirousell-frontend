/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://firebasestorage.googleapis.com/v0/b/shopirousell.appspot.com/o/images%2Fcfe58a205dccf74868b258bd5d0452fa.jpg?alt=media&token=19423d13-4919-4695-948d-2b9935ea92d1
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/shopirousell.appspot.com/o/**",
      },
    ],
  },

  reactStrictMode: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
};

module.exports = nextConfig;
