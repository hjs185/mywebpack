// 开发环境入口文件
// import "@babel/polyfill";
let arr = [
  {
    name: "hjs"
  },
  {
    name: "ds"
  }
];

let upArr = arr.map(item => item.name);
let fun = () => "1111哈哈哈";
console.log(upArr);
console.log(fun());

const myPromise = new Promise((resolve, reject) => {
  resolve("Promise处理");
});
console.log(myPromise);

var isIn = [111, 234].includes("hjsaa");
console.log(isIn);

import img from "../img/echart.png";
import "../css/index.css";
console.log(img);
