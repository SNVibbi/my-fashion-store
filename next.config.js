// next.config.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.timbu.cloud/products?organization_id=1af3d7190adc400082a40d0228c1db00&Appid=R5NQLQO73Q45EKZ&Apikey=dece8d2742f1403485564a1d800b5ba420240713032401503053' // Proxy to Backend
      }
    ]
  },
  // Additional config can be placed here
}
