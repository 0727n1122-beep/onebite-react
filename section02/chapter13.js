// 14. 비동기 작업 처리하기 2. Promise
// Promise : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// -> 콜백 지옥 문제를 해결하기 위해 등장함
// -> 비동기 작업의 성공/실패 여부와 결과 값을 다룰 수 있음


// 대기 (pending) : 아직 작업이 완료되지 않은 상태
// (해결) -> 성공 (fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태 
// (거부) -> 실패 (rejected) : 비동기 작업이 실패한 상태

function add10 (num) {
    const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor : 비동기 작업을 수행하는 함수

    setTimeout( () => {

        if (typeof num === "number") {
            resolve(num + 10); // 성공했을 때 호출
        } else {
            reject("num이 숫자가 아닙니다..");
        }
    }, 2000);
});

return promise; // Promise 객체 반환
}

const p = add10(0);
p.then((result) => {
    console.log(result); // 10
    return add10(result);

}).then((result) => {
    console.log(result); // 20
    return add10(result);
}).then((result) => {
    console.log(result); // 30
});