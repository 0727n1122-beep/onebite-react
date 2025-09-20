// 6. 반복문으로 배열과 객체 순회하기

// 순회 : 배열이나 객체의 요소/프로퍼티를 순서대로 하나씩 접근하는 것 

// 1.1 배열 순회
let arr = [1, 2, 3];

// 1. 배열 인덱스 
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]); //1 2 3
}

// arr.length : 배열의 길이(요소의 개수)

// 1.2 for of 반복문
// -> 배열의 요소를 순회할 수 있는 반복문
for (let item of arr) {
    // console.log(item); //1 2 3
}


// 2. 객체 순회 
let person = {
    name : "고윤진",
    age : 25,
    hobby : "독서",
};

// 2.1 Object.keys 사용
// -> 객체의 키(프로퍼티 이름)들을 배열로 반환하는 메서드

let keys = Object.keys(person); //["name", "age", "hobby"]

for (let i = 0; i < keys.length; i++){
  //console.log(person[keys[i]]); //고윤진 25 독서
}

for (let key of keys){
    //console.log(key, person[key]); //고윤진 25 독서
}


// 2.2 Object.values 사용
// -> 객체의 값(프로퍼티 값)들만 뽑아서  배열로 반환하는 메서드
let values = Object.values(person); //["고윤진", 25, "독서"]
console.log(values);

// 2.3 for in 반복문
// -> 객체의 키(프로퍼티 이름)들을 순회할 수 있는 반복문
for (let key in person) {
    console.log(key, person[key]); //name 고윤진 age 25 hobby 독서
}

// for of 반복문은 배열만 순회 가능 
// for in 반복문은 객체만 순회 가능