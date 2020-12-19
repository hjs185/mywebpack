// 功能：1、配置打包的出口文件 2、配置打包的模板文件
const path = require("path");
const { merge } = require("webpack-merge");

// 配置公共config文件
const commonPath = path.resolve(__dirname, "./webpack.common.js");
const commonConfig = require(commonPath);

// 配置打包模板
const templateHTML = path.resolve(__dirname, "../hjs.html");
const HtmlWbpackPlugin = require("html-webpack-plugin");
module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    // name chunkhash 为关键字 详情看webpack文档
    filename: "[name].[chunkhash:8].js"
  },
  plugins: [
    // 打包的模板文件
    new HtmlWbpackPlugin({
      // 要打包的路径
      template: templateHTML,
      // 打包的文件名
      filename: "hjs_build.html"
    })
  ]
});
