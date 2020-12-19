const { merge } = require("webpack-merge");
const path = require("path");

// 配置公共config文件
const commonPath = path.resolve(__dirname, "./webpack.common.js");
const commonConfig = require(commonPath);

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    filename: "[name].js"
  },
  devServer: {
    host: "localhost",
    // 是否可以查看ip
    // useLocalIp: true,
    open: true,
    port: 9000,
    openPage: "./hjs.html"
  }
});
