// 12. 비동기 작업 처리하기 1. 콜백함수 


// 콜백함수 : 다른 함수의 인수로 전달되는 함수
// -> 특정 작업이 끝난 후에 실행되는 함수
// -> 비동기 작업이 완료된 후에 실행되는 함수

// 음식을 주문하는 상황
function orderFood (callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback){
     setTimeout(() => {
        const cooldownedFood = `식은 ${food}`; 
        callback(cooldownedFood); // 2초 후에 콜백함수 실행
    }, 2000);
}

function freezeFood(food, callback){
    setTimeout(() => {
        const frozenFood = `냉동된 ${food}`;
        callback(frozenFood); // 1.5초 후에 콜백함수 실행
    }, 1500);
}


 orderFood ((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (frozenFood) => {
            console.log(frozenFood)
        })
    });
 });


 // 인덴트 (들여쓰기) 가 너무 깊어지면 가독성이 떨어짐
    // -> 콜백지옥 (Callback Hell)

