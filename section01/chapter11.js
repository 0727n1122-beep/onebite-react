// 11. 함수

// 1) 함수 선언문
function greeting () {
    // console.log("안녕하세요");
}

greeting(); //함수 호출
// 함수 호출 시 반드시 함수 이름 뒤에 소괄호()를 작성해야 함

function getArea (width, height) { // 매개변수(Parameter) : 함수 선언 시 전달받는 값
    
    let area = width * height;

    return area; //함수 종료 + 반환값
    //반환값은 함수 호출의 결과값

}

let area1 = getArea(10, 20); //200
console.log(area1);

//getArea(11, 20); //220 // 인수(Arguments) : 함수 호출 시 전달하는 값
// getArea(5, 10); //50

// 중첩 함수 (함수 안에 함수가 있는 형태)

// 호이스팅 : 끌어올린다는 의미
// -> 함수 선언문은 코드가 실행되기 전에 가장 먼저 메모리에 등록되는 특징