const path = require("path");
// const glob = require("glob");

// 配置入口文件
// const entrys = {};
// const srcPath = path.resolve(__dirname, "../src/js");
// const srcPathFiles = glob.sync(path.join(srcPath, "/*.js"));
// 配置入口文件文件 { 文件夹名称 ：路径 } 的格式
// srcPathFiles.forEach(item => {
//   // 可以转用正则匹配去写，匹配.js前面的文件名字
//   entrys[item.split("/").pop().split(".")[0]] = item;
// });

// 配置出口文件路径
const out_path = path.resolve(__dirname, "../dist");

module.exports = {
  // entry: entrys,
  output: {
    path: out_path
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          // url-loader是基于file-loader的二次封装，可以把图片比较小的图片转换为base64的功能 需要配置limit
          loader: "url-loader",
          // file必须要安装，不然会报错
          // loader: "file-loader",
          options: {
            name: "[name]_[hash:5].[ext]",
            // 打包后存放位置
            outputPath: "images/",
            limit: 2000
          }
        }
      }
    ]
  }
};
