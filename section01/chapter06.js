// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환하는것

let num = 10;
let str = "20";

const result1 = num + str; // "1020" -> 숫자 10이 문자열 "10"으로 형 변환


// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자 형 변환

let str1 = "10";
let strToNum1 = Number(str1); //형 

let str2 = "15개";
let strToNum2 = parseInt(str2); // 15 // parseInt:숫자로 변환 가능한 부분까지만 변환


// -> 숫자 -> 문자열 형 변환
let num1 = 20;
let numToStr1 = String(num1);
