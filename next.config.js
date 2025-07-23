/** @type {import('next').NextConfig} */
const nextConfig = {
  // Help with Windows caching permission issues
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = {
        type: 'memory'
      }
    }
    return config
  }
}

module.exports = nextConfig
