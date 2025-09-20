// 8. 배열 메서드 2. 순회와 탐색
// 배열의 요소를 순회하거나 탐색하는 메서드

// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// -> 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
// -> 배열의 각 요소에 대해 콜백함수를 실행하는 메서드를

let arr1 = [1, 2, 3];
arr1.forEach(function(item, index, array){
    console.log(index, item*2);
});
// item : 현재 순회중인 요소
// index : 현재 순회중인 요소의 인덱스
// array : 현재 순회중인 배열 자체

let doubledArr = [];

arr1.forEach((item) =>{
    doubledArr.push(item * 2);
});


// 2. includes
// -> 배열에 특정 요소가 포함되어 있는지 확인하는 메서드
let hasTwo = arr1.includes(2); //true
let hasFive = arr1.includes(5); //false

// 3. indexOf
// -> 배열에서 특정 요소의 인덱스를 반환하는 메서드
let index1 = arr1.indexOf(2); //1
let index2 = arr1.indexOf(5); //-1 (존재하지 않는 요소는 -1 반환)

// 배열의 같은 값이 여러 개 있을 때는 가장 작은 인덱스를 반환 


// 4. findIndex
// -> 배열에서 특정 조건을 만족하는 첫 번째 요소의 인덱스를 반환하는 메서드
// -> 콜백함수를 인수로 받아서, 콜백함수가 true를 반환하는 첫 번째 요소의 인덱스를 반환


// 복잡한 객체 타입의 값을 찾을 때는 findIndex를 사용

// 5. find
// -> 모든 요소를 순회하면서, 특정 조건을 만족하는 첫 번째 요소를 반환하는 메서드
// -> 배열에서 특정 조건을 만족하는 첫 번째 요소를 그대로 반환하는 메서드
// -> 객체 자체가 반환됨 
let foundItem = arr1.find((item) => item > 1); //2
let notFoundItem = arr1.find((item) => item > 5); //undefined (조건을 만족하는 요소가 없을 때)

