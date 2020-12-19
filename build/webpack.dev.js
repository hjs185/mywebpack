const { merge } = require("webpack-merge");
const path = require("path");

const commonPath = path.resolve(__dirname, "./webpack.common.js");
const commonConfig = require(commonPath);

// // 配置打包模板
// const templateHTML = path.resolve(__dirname, "../templates/dev.html");
// const HtmlWbpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    filename: "[name].js"
  },
  // plugins: [
  //   // 打包的模板文件
  //   new HtmlWbpackPlugin({
  //     // 要打包的模板
  //     template: templateHTML,
  //     // 打包后的文件名
  //     filename: "dev_build.html",
  //     // 指定引入哪个js文件
  //     chunks: ["devFile"]
  //     // title: "哈哈哈",
  //     // favicon: ""
  //   })
  // ],
  devServer: {
    host: "localhost",
    // 是否可以查看ip
    // useLocalIp: true,
    open: true,
    port: 9000,
    openPage: "./templates/dev.html"
  }
});
