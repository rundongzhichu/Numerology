const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/hello', {
            target: 'http://localhost:8080',
            changeOrigin: true, // 控制服务器收到的响应头中Host字段的值，为true时收到的是target字段的值，为false收到的是原始的http://localhost:3000
        }),
        createProxyMiddleware('/delegator', {
            target: 'http://localhost:8080',
            changeOrigin: true, // 控制服务器收到的响应头中Host字段的值，为true时收到的是target字段的值，为false收到的是原始的http://localhost:3000
        })
    )
}