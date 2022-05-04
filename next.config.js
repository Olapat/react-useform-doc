/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/react-useform-doc/' : ''
}
