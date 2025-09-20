// 9. 배열 메서드 3. 배열 변형
// -> 배열의 요소를 추가, 삭제, 변경하는 메서드
// -> 원본 배열이 변경됨 (파괴적 메서드)
// -> 새로운 배열을 반환하지 않음
// -> 배열의 길이가 변경될 수 있음
// -> 배열의 길이가 변경되지 않는 메서드는 비파괴적 메서드

//  1. filter 메서드
// -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },

];

const result1 = arr1.filter((item) => item.age >= 30);

console.log(result1); // [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]


// 2. map 메서드
// -> 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

let names = arr1.map((item) => item.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// 3. sort 메서드
// -> 배열의 요소들을 사전순으로 정렬하는 메서드 

let arr2 = [3, 1, 4, 1, 5, 9];
arr2.sort(); // [1, 1, 3, 4, 5, 9]
console.log(arr2);

// 숫자 배열을 오름차순으로 정렬하려면 비교 함수를 제공해야 함
arr2.sort((a, b) => {
    if(a > b) {
        // b가 a 앞에 와라
        return 1;
        // a가 b보다 크면 양수 반환
    } else if (a < b) {
        // a가 b 앞에 와라
        return -1;
        // a가 b보다 작으면 음수 반환
    } else {
        return 0;
    }
}); // [1, 1, 3, 4, 5, 9]


// 4. toSorted
// -> 배열의 요소들을 사전순으로 정렬한 새로운 배열을 반환하는 메서드
// -> 원본 배열은 변경되지 않음

// 5. join 
// -> 배열의 모든 요소를 문자열로 변환하여 하나의 문자열로 합치는 메서드
let arr3 = ['Hello', 'World', 'JavaScript'];
let str = arr3.join('-'); // 'Hello World JavaScript'
console.log(str);