// 스코프
// 범위를 뜻 함 
// 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함
// 지역 스코프, 전역 스코프
// 지역 스코프 : 함수 내부에서 선언된 변수나 함수는 함수 내부에서만 접근할 수 있음
// 전역 스코프 : 함수 외부에서 선언된 변수나 함수는 어디서든 접근할 수 있음

function myFunction() {
    var localVar = "I am local"; // 지역 변수
}
// console.log(localVar); // 오류 발생, localVar는 함수 외부에서 접근 불가

var globalVar = "I am global"; // 전역 변수
function anotherFunction() {}
// console.log(globalVar); // "I am global", 어디서든 접근 가능