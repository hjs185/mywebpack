// 功能： 1、配置一个入口
const path = require("path");
const glob = require("glob");

// 配置入口文件
const entrys = {};
const srcPath = path.resolve(__dirname, "../src/js");
const srcPathFiles = glob.sync(path.join(srcPath, "/*.js"));
// 配置入口文件文件 { 文件夹名称 ：路径 } 的格式
srcPathFiles.forEach(item => {
  // 可以转用正则匹配去写，匹配.js前面的文件名字
  entrys[item.split("/").pop().split(".")[0]] = item;
});

// 配置出口文件路径
const out_path = path.resolve(__dirname, "../dist");
module.exports = {
  entry: entrys,
  output: {
    path: out_path
  }
};
