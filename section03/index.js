// // const {add, sub} = require("./math");

// import multiply from "./math.js";
// // default export 는 import 시 이름 마음대로 지정 가능
// // 중괄호 없이 사용


// import {add, sub} from "./math.js";
// // esm 모듈 사용시 .js 확장자 필수

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(multiply(1, 2));

import randomColor from "randomcolor";
// npm i randomcolor

const color = randomColor();
console.log(color);