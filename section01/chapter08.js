// 1. null 병합 연산자 (??)
// -> 존재하는 값을 추려내는 기능
// -> null 또는 undefined가 아닌 값을 찾아내는 연산자

let var1;  //undefined
let var2 = 10;
let ver3 = 20;

let var4 = var1 ?? var2; //10 
let var5 = var1 ?? ver3; //20
let var6 = var2 ?? ver3;  //두 개의 값이 모두 존재하므로 왼쪽 값인 10이 선택됨


let useName;
let userNickName = "YJ";

let displayName = useName ?? userNickName; //YJ


// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = true

let t1 = typeof var7; //boolean


// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자 
// -> 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드

let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀" 저장
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);