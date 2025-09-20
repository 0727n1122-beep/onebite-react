// 2. 단락 평가
// -> 논리 연산자(&&, ||)를 이용해서 표현식을 평가할 때
// -> 표현식의 평가 결과가 true, false가 아닌 다른 값이 될 수 있음
// -> 표현식의 평가 결과가 어떤 값이 될지 예측하는 것
// -> 조건문에서 많이 사용됨
// -> 첫 번째 피연산자의 값만으로도 논리 연산자의 결과를 알 수 있을 때

function returnFalse(){
    console.log("False 함수");
    return false;
}

function returnTrue(){
    console.log("True 함수");
    return true;
}

 console.log(returnFalse() && returnTrue()); //false
 console.log("---");

//returnTrue 함수가 실행되지 않음
//&& 연산자는 첫 번째 피연산자가 false이면 두 번째 피연산자는 평가하지 않음

console.log(returnTrue() && returnFalse()); //true
console.log("---");
// 단락평가가 일어나지 않음
// 첫 번째 피연산자가 true이기 때문에 두 번째 피연산자를 평가해야 결과를 알 수 있음

console.log(returnTrue() || returnFalse()); //true
// || 연산자는 첫 번째 피연산자가 true이면 두 번째 피연산자는 평가하지 않음

console.log("---");

// 단락 평가 활용 사례

function printName(person){
    const name = person && person.name;
    console.log(name || "이름 없음");

}

printName({name : "고윤진"}); //고윤진
printName(null); //이름 없음