// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2; //5
let num2 = 3 - 2; //
let num3 = 3 * 2; //6
let num4 = 3 / 2; //1.5
let num5 = 3 % 2; //1 -> 나머지 연산자

let num6 = (1 + 2) * 18; //54 -> 사칙연산 우선순위


// 3. 복합 대입 연산자
// 산술 연산자와 대입 연산자가 복합되어 있음 
let num7 = 10;
num7 += 20; //30 // num7 = num7 + 20;
num7 -= 5; //25

// 모든 산술 연산자 기호가 올 수 있음 


// 4. 증감 연산자 (값을 1씩 증가/감소 시킴)
let num8 = 10;

// 전위 연산자: 다른 연산자보다 먼저 실행됨 : ++num8
// 후위 연산자: 다른 연산자보다 나중에 실행됨 : num8++


// 5. 논리 연산자
let or = true || false; //true

let and = true && false; //false

let not = !true; //false

// 6. 비교 연산자
let result1 = 1 === 1; //true
let result2 = 1 !== 2; //true

// 대소비교 
let result3 = 3 > 2; //true
let result4 = 3 < 2; //false
let result5 = 3 >= 2; //true
let result6 = 3 <= 2; //false
