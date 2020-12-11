let arr = [
  {
    name: "hjs"
  },
  {
    name: "ds"
  }
];

import { str } from "./common";
let upArr = arr.map(item => item.name);
let fun = () => "1111哈哈哈";
console.log(upArr);
console.log(str, 1111111111234);
console.log(fun());

const myPromise = new Promise((resolve, reject) => {
  resolve("Promise处理");
});
console.log(myPromise);

var isIn = [111, 234].includes(111);
console.log(isIn);
