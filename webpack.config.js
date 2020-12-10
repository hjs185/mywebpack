const path = require("path");
const glob = require("glob");
// 一对一的方式
// const en_path = path.resolve(__dirname, "./index.js");

// 多对一的方式
// const devFilePath = path.resolve(__dirname, "./src/js/devFile.js");
// const testFilePath = path.resolve(__dirname, "./src/js/testFile.js");
// const deployFilePath = path.resolve(__dirname, "./src/js/deployFile.js");

// 多对多的方式
const entrys = {};
const out_path = path.resolve(__dirname, "./dist/index.js");
const templateHTML = path.resolve(__dirname, "./hjs.html");
const HtmlWbpackPlugin = require("html-webpack-plugin");

const srcPath = path.resolve(__dirname, "./src/js");
const srcPathFiles = glob.sync(path.join(srcPath, "/*.js"));
// 配置入口文件文件 { 文件夹名称 ：路径 } 的格式
srcPathFiles.forEach(item => {
  // 可以转用正则匹配去写，匹配.js前面的文件名字
  entrys[item.split("/").pop().split(".")[0]] = item;
});

module.exports = {
  // 生产环境
  // mode: "production",
  // 开发环境
  mode: "development",

  // 一对一的方式
  // entry:en_path,

  // 多对一的方式
  // entry: [devFilePath, testFilePath, deployFilePath],

  // 多对多的方式
  entry: entrys,
  output: {
    path: out_path,
    // name chunkhash 为关键字 详情看webpack文档
    filename: "[name].[chunkhash:8].js"
  },
  plugins: [
    // 打包的模板文件
    new HtmlWbpackPlugin({
      template: templateHTML,
      filename: "hjs_build.html"
    })
  ],
  devServer: {
    host: "localhost",
    // 是否可以查看ip
    // useLocalIp: true,
    open: true,
    port: 9000
  }
};
