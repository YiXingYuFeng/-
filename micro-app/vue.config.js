const path = require("path");
const { name } = require("./package");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    port: 9010,
    host: "0.0.0.0",
    open: false,
    headers: {
      //一般用法（*，指定域，动态设置），3是因为*不允许携带认证头和cookies
      "Access-Control-Allow-Origin": "*",
      //是否允许后续请求携带认证信息（cookies）,该值只能是true,否则不返回
      "Access-Control-Allow-Credentials": true,
    },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "microApp",
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `test-apps`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_test`,
    },
    // 警告 webpack 的性能提示
    performance: {
      hints: "warning",
      // 入口起点的最大体积
      maxEntrypointSize: 1024 * 1024 * 3,
      // 生成文件的最大体积
      maxAssetSize: 1024 * 1024 * 3,
      // 只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith(".js");
      },
    },
  },
};
