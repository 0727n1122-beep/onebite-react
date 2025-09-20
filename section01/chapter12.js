// 1. 함수 표현식과 화살표 함수 

function funcA() {
//  console.log("funcA");
}

let varA = funcA; // 함수는 값처럼 변수에 저장 가능 
// console.log(varA); // 함수 자체가 출력됨
varA(); // funcA

let varB = function funcB() { // 함수 표현식
//  console.log("funcB");
}; //선언식이 아님. 

varB(); // funcB


// 2. 화살표 함수 (Arrow Function)
// -> function 키워드 대신에 화살표(=>)를 사용해서 함수를 간결하게 작성하는 방법

let varC = function (){
    return 1;
}; //기존 함수 표현식

let varD = () => {
    return 1;
}; //화살표 함수
 console.log(varC()); //1

 let varE = () => 2; //더 간결하게 작성 가능

 // 매개변수가 필요한 경우
    let varF = (x) => x + 1; //x : 매개변수 

    let varG = (value) => {
        console.log(value);
        return value * 2;
    };

    console.log(varG(10)); //20