const path = require("path");
const { merge } = require("webpack-merge");

// 配置公共config文件
const commonPath = path.resolve(__dirname, "./webpack.common.js");
const commonConfig = require(commonPath);

// 入口文件
// const entryPath = path.resolve(__dirname, "../src/js/deployFile.js");
const entryPath = path.resolve(__dirname, "../src/js/devFile.js");

// 配置打包模板
const templateHTML = path.resolve(__dirname, "../templates/deploy.html");
const HtmlWbpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: { deployFile: entryPath },
  output: {
    // name chunkhash 为关键字 详情看webpack文档
    filename: "[name].[chunkhash:8].js"
  },
  plugins: [
    // 编辑模板文件
    new HtmlWbpackPlugin({
      // 要打包的模板
      template: templateHTML,
      // 打包后的文件名
      filename: "index.html",
      // 指定引入哪个js文件
      chunks: ["deployFile"],
      // excludeChunks: ["devFile", "testFile"],
      title: "部署环境"
      // favicon: ""
    })
  ]
});
