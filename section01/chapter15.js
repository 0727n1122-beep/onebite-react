// 객체 : 원시 타입이 아닌 객체 타입의 자료형
// 여러가지 값을 동시에 저장할 수 있는 자료형

// 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함


let obj1 = new Object(); //객체 생성자 함수
let obj2 = {}; //객체 리터럴 표기법 (대부분 사용)

// 2. 객체의 속성 (property) : 객체가 가지고 있는 값 -> key : value 쌍으로 이루어짐
let person = {
    name : "고윤진",
    age : 25,
    hobby : "책 읽기",
    extra : {},
    10 : 20,

    "like cat" : true // 공백이 포함된 key는 따옴표로 묶어야 함

};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근하는 방법 : 점 표기법, 대괄호 표기법

let name = person.name; //점 표기법
// console.log(name); //고윤진

// 존재하지 않는 프로퍼티의 값을 조회하면 undefined 반환

let age = person["age"]; //대괄호 표기법
// 프로퍼티의 키를 쌍따옴표와 함께 문자열로 작성해야함

let property = "hobby";
let hobby = person[property]; //대괄호 표기법
// person 객체의 property 변수에 저장된 값(hobby)을 키로 사용해서 프로퍼티에 접근 

// 대괄호 표기법은 동적으로 프로퍼티 키를 지정해야 할 때 사용
// 점 표기법은 프로퍼티 키가 유효한 식별자인 경우에만 사용 가능


// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "프로그래머"; //점 표기법

person["favorite food"] = "삼겹살"; //대괄호 표기법

// 3-3. 프로퍼티를 수정하는 방법
person.age = 26; //점 표기법
person["like cat"] = false; //대괄호 표기법


// 3-4. 프로퍼티를 삭제하는 방법
// delete 연산자 사용
delete person.job; //점 표기법
delete person["favorite food"]; //대괄호 표기법


// 3-5. 프로퍼티의 존재 여부 확인하는 방법 (in 연산자 사용)
let result1 = "name" in person; //true
let result2 = "job" in person; //false
console.log(result1);
console.log(result2);