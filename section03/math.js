// math 모듈 

export function add(a, b) {
    return a + b;
} 

export function sub(a, b) {
    return a - b;
}

export default function multiply (a, b) {
    return a * b;
} 
// default export 는 파일당 1개만 가능 : 기본값으로 내보내기


// module.exports = {
//     add : add,
//     sub : sub,
// }


// esm 모듈 
// export {add, sub};

