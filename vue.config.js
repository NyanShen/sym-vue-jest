module.exports = {
    devServer: {
        host: 'sym.taxes.com',
        port: 80,
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                //如果要代理websockets
                ws: false,
                //将主机标头的原点改为目标URL
                /**
                 * true
                 * /api/test
                 * http://localhost:8000/test
                 * false
                 * http://localhost:8000/api/test
                 */
                changeOrigin: false
            }
        }
    }
}