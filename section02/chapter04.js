// 4. spread 연산자와 Rest 매개변수

// 1. spread 연산자
// -> 배열이나 객체를 개별 요소나 프로퍼티로 분리하는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// arr1의 배열이 나중에 추가되거나 삭제될 수 있으므로 arr1을 직접 수정하는 것보다
// spread 연산자를 이용해서 arr1의 요소를 개별적으로 복사하는 것이 더 안전함

let combinedArr = [...arr1, ...arr2]; //arr1과 arr2의 요소를 모두 포함하는 새로운 배열 생성
// console.log(combinedArr); // [1, 2, 3, 4, 5, 6]


 // 객체에서도 사용 가능
let obj1 = {
    a : 1,
    b : 2,
};

let obj2 = {
    ... obj1,
    c : 3,
    d : 4,
};

// console.log(obj2); //{a: 1, b: 2, c: 3, d: 4}

// 함수에서도 사용 가능
function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1); //1 2 3



// 2. Rest 매개변수
// -> 여러 개의 인수를 하나의 배열로 묶어주는 역할

function funcB(... rest) {
    console.log(rest); //rest는 배열
}

// rest를 이용하면 매개변수의 개수가 가변적인 함수를 만들 수 있음

funcB(...arr1); // [1, 2, 3]