const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
	app.use(
		createProxyMiddleware('/api',{ //遇见/api前缀的请求，就会触发该代理配置
			target: 'http://localhost:8080/', //本地测试
			changeOrigin: true,//控制服务器收到的请求头中Host的值
			pathRewrite: {'^/api':''} //重写请求路径(必须)
		})
	)
}