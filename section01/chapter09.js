// 조건문 : 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법 
// if, else if, else, switch, case

// 1. if문
let num = 3;

if (num >= 10) {
    // console.log("num은 10이상입니다.");
    // console.log("조건이 참 입니다.");

    } 
    else if(num >=5) {
    // console.log("num은 5이상입니다.");
    } else {
    // console.log("조건이 거짓입니다");
    }

    // 2. switch문
    // -> if문과 동일한 기능을 하지만, 여러 조건을 처리할 때 더 간결하게 작성 가능

    let animal = "elephant";

    //switch 문의 소괄호 안에는 변수명이 들어감
    switch (animal) {
        case "cat" : {
            console.log("고양이");
            break;
        } //animal === "cat"
        case "dog" : {
            console.log("강아지");
            break;
        } //animal === "dog"
        case "bear" : {
            console.log("곰");
            break;
        } //animal === "bear"
        case "snake" : {
            console.log("뱀");
        } //animal === "snake"
        case "tiger" : {
            console.log("호랑이");
            break;
        } //animal === "tiger"
        default : {
            console.log("해당하는 동물이 없습니다.");
        }
    }

    // break문 : switch문에서 각 case 블록의 마지막에 작성하는 문법
    // default문 : switch문에서 모든 case에 해당하지 않는 경우 실행되는 블록