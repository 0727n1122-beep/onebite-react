// 1. Number Type

let num1 = 27;
let num2 = 1.5;
let num3 = -20;


let inf = Infinity
let mInf = -Infinity;

let nan = NaN;

//2. String Type
let myName = "Yunjin";
let myLocation = "이화여대";
let introduce = myName + myLocation; // string type은 덧셈 연산까지 가능


let introduceText = ``; // 백틱은 문자열 안에 변수의 값을 동적으로 넣을 수 있음
introduceText = `안녕하세요 저는 ${myLocation}에 다니는 ${myName}입니다.`;

// 탬플릿 리터럴 문법 

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

//4.Null  Type (아무것도 없다)
let empty = null;  //값이 비어있음을 명시적으로 표현할 때 사용

//5. Undefined Type (값이 할당되지 않음)
let undef = undefined; //변수에 어떠한 값도 할당되지 않은 상태
console.log(undef); //자동으로 들어가는 값 

