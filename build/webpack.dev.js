const { merge } = require("webpack-merge");
const path = require("path");

const commonPath = path.resolve(__dirname, "./webpack.common.js");
const commonConfig = require(commonPath);

const distPath = path.resolve(__dirname, "../dist");
// 入口文件
const entryPath = path.resolve(__dirname, "../src/js/devFile.js");

// 配置打包模板
const templateHTML = path.resolve(__dirname, "../templates/dev.html");
const HtmlWbpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: {
    devFile: entryPath
  },
  output: {
    filename: "[name].js"
  },
  plugins: [
    // 编辑模板文件
    new HtmlWbpackPlugin({
      // 要打包的模板
      template: templateHTML,
      // 打包后的文件名
      filename: "index.html",
      // 指定引入哪个js文件
      chunks: ["devFile"],
      // excludeChunks: ["devFile", "testFile"],
      title: "开发环境"
      // favicon: ""
    })
  ],
  devServer: {
    hot: true,
    contentBase: distPath,
    host: "localhost",
    open: true,
    port: 9001
    // noInfo: true
  }
});
