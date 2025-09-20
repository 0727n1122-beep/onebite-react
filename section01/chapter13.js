// 13. 콜백함수 (Callback Function)
// 자신이 아닌 다른 함수에, 인수로 전달된 함수를 의미

function main(value) {
    // console.log(1);
    // console.log(2);
    value();
    //onsole.log("end");   // console.log(value);
}



main(function sub(){
//  console.log("i am sub");
}
); // sub 함수 -> main 함수의 value 매개변수에 sub 함수가 전달됨
// sub 함수는 당장 실행되는 것이 아니라 main 함수 내부에서 value()가 호출될 때 실행됨

// 2. 콜백함수의 활용 
function repeat(count){
    for (let i = 1; i <=count; i++) {
       // console.log(i);
    }
}

repeat(5); //1 2 3 4 5

// function repeatDouble(count){
//     for (let i = 1; i <=count; i++) {
//         console.log(i*2); //2 4 6 8 10
//     }
// }

// repeatDouble(5); //2 4 6 8 10

// 구조가 흡사한 함수가 필요할 때마다 새로 만들고 이러면 비효율적임 
// -> 콜백함수를 활용해서 중복되는 코드를 줄일 수 있음

function repeatWithCallback(count, callback){
    for (let i = 1; i <=count; i++) {
        callback(i);
    }
}

repeatWithCallback(5, function(i){
    console.log(i);
});

// repeat 함수에서 반복문이 돌면서 매 반복바다 콜백함수를 호출하면서 i 값을 전달 

/// 화살표 함수로 표현
repeatWithCallback(5, (i) => console.log(i*2));