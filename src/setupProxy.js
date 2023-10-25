const { createProxyMiddleware } = require('http-proxy-middleware');

const target = 'https://393d-188-146-122-83.ngrok-free.app';

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    }),
  );
};
