/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    sassOptions: {
        fiber: false,
        includePaths: [path.join(__dirname, 'styles')],
    },
    experimental: { appDir: true },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
}

module.exports = nextConfig
