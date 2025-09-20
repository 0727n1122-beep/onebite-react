// 1. falsy한 값
// -> false로 평가되는 값
// -> 조건문에서 false로 평가되는 값

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN; // Not a Number
let f6 = "";
let f7 = 0n; // BigInt 0 // 0n: BigInt 타입의 0

// if(!f1) {
//     console.log("f1은 falsy한 값입니다.");
// }

// 2. truthy한 값
// -> true로 평가되는 값
// -> 조건문에서 true로 평가되는 값
// -> 7가지 falsy한 값을 제외한 모든 값
let t1 = "hello";
let t2 = 127;
let t3 = [];
let t4 = {};

if(t4) {
    console.log("t4는 truthy한 값입니다.");
}


// 3. 활용 사례

function printName(person){
    if (!person) { // person이 null, undefined, false, 0, "" 등 falsy한 값일 때
        //비효율적인 조건문을 사용하지 않아도 됨 
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = null;
//= {name : "고윤진"};
printName(person); //고윤진
// name 프로퍼티가 존재하지 않으면 undefined 출력
// printName({}); //undefined
// printName(null); //TypeError: Cannot read properties of null (reading 'name')