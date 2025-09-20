// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
};

// 상수 객체는 저장된 값을 수정할 수 없다 
animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제

console.log(animal);

// 저장되어 있는 객체 값의 프로퍼티를 수정하는 것은 괜찮음 


// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함 

const person = {
    name : "고윤진",
     // 메서드 선언
    sayHi : function () {
        console.log("안녕");
    },
};

person.sayHi();
person["sayHi"]();
