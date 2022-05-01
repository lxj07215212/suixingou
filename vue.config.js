module.exports = {
    // 关闭eslint
    lintOnSave: false,
    // 代理跨域
    devServer:{
        proxy: {
            "/api": {//前端再发请求的时候路径中带有/api，代理服务器会向真实的服务器“target的路径”要数据
                target: "http://gmall-h5-api.atguigu.cn",
            },
        },
    },
}