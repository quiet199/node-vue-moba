module.exports = {
    lintOnSave:false, //是否关闭eslint检查
    devServer: {
        overlay: {
            warnings: false,//不显示警告
            errors: false //不显示错误
        },
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        proxy: { //配置跨域
            '/api': {  // 这里和方法里 axios里的 url匹配   （本行为第9行）
                target: 'http://localhost:3000/', //这里后台的地址模拟的;应该填写你们真实的后台接口  // 这里和后台地址完全匹配
                ws: true,
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/api': '' //请求的时候使用这个api就可以 // 这里和  第9行匹配
                }
            }
        }
    }
}