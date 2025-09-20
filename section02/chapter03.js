// 3. 구조 분해 할당
// -> 배열이나 객체의 값을 개별 변수에 쉽게 할당할 수 있도록 도와주는 문법
// -> ES6에서 도입된 문법

// 1. 배열 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; // 배열의 각 요소를 개별 변수에 할당
console.log(one, two, three, four); // 1 2 3 4
console.log("------------------")

// 2. 객체 구조 분해 할당
let person = {
    name : "고윤진",
    age : 25,
    hobby : "독서",
}


// let {name, age, hobby, address = "주소 없음"} = person; // 객체의 각 프로퍼티를 개별 변수에 할당
// 객체는 중괄호 
// console.log(name, age, hobby, address); //고윤진 25 독서 주소 없음

let {
    age : myAge,
    hobby,
    name,
    extra = " HEllo",
} = person;
// age 프로퍼티를 myAge 변수에 할당
console.log(myAge, hobby, name, extra); //25 독서 고윤진  HEllo

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
// -> 매개변수가 많을 때 유용함
const func = (name, age, hobby, extra) => {
    console.log(name, age, hobby, extra);

}

func(person); //undefined undefined undefined undefined
// 객체를 넘겼기 때문에 구조 분해 할당을 받을 수 있음객