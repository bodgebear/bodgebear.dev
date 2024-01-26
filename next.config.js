const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  compiler: {
    styledComponents: true,
  },
};

module.exports = withMDX(nextConfig);
