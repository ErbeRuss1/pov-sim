const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/faro',
    createProxyMiddleware({
      target: 'https://faro-collector-prod-us-west-0.grafana.net',
      changeOrigin: true,
      secure: true,
      logLevel: 'warn',
      pathRewrite: { '^/faro': '' },
    })
  );
};
