// 7. 배열 메서드 1. 요소 조작 

// 6가지의 요소 조작 메서드 

// 1. push 
// -> 배열의 마지막에 요소를 추가하는 메서드
let arr = [1, 2, 3];
arr.push(4); //arr 배열의 마지막에 4 추가
// console.log(arr); //[1, 2, 3, 4]

// 2. pop
// -> 배열의 마지막 요소를 제거하고 반환하는 메서드
let lastItem = arr.pop(); //마지막 요소 제거 후 반환
console.log(lastItem); //4

// 3. shift
// -> 배열의 첫 번째 요소를 제거하고 반환하는 메서드
let firstItem = arr.shift(); //첫 번째 요소 제거 후 반환
console.log(firstItem); //1

// 4. unshift
// -> 배열의 첫 번째(맨 앞)에 요소를 추가하는 메서드
arr.unshift(0); //맨 앞에 0 추가
console.log(arr); //[0, 2, 3]

// shift, unshift는 배열의 앞부분을 조작하기 때문에
// 배열의 길이가 길어질수록 성능이 떨어짐

// 5. splice
// -> 배열의 특정 위치에 요소를 추가하거나 제거하는 메서드

let arr2 = [1, 2, 3, 4, 5];
let sliced = arr2.slice(2, 5); //2번 인덱스부터 5번 인덱스 전까지 잘라내기
let sliced2 = arr2.slice(2); //2번 인덱스부터 끝까지 잘라내기
let sliced3 = arr2.slice(-2); //뒤에서 2번째 요소부터 끝까지 잘라내기

console.log(sliced); //[3, 4]
console.log(arr2); //[1, 2, 3, 4, 5] 원본 배열은 변경되지 않음 
// slice는 원본 배열을 변경하지 않음

console.log(sliced3) //[4, 5]

// 6. concat
// -> 두 개 이상의 배열을 하나로 합치는 메서드

let arr3 = [1, 2];
let arr4 = [3, 4];

let concatedArr = arr3.concat(arr4); //arr3과 arr4를 합친 새로운 배열 생성
console.log(concatedArr); //[1, 2, 3, 4]
