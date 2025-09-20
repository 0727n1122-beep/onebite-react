
// 1. 변수
let age; // 변수 선언 및 초기화



//변수에 선언한 값은 프로그램 실행 도중 변경 가능
age = 30;


// 중복된 이름으로 변수 다시 선언 불가
// let age; // Uncaught SyntaxError: Identifier 'age' has already been declared


// 2. 상수
const birth = "2001.07.27"; // 상수 선언 및 초기화
// 상수는 초기화 후 값 변경 불가능

//변수나 상수의 이름을 정하는 행위 : 명명 (네이밍)

// 3. 변수 명명 규칙
// 3-1. $, _ 를 제외한 기호는 사용할 수 없음
let $_name;

// 3-2. 숫자로 시작할 수 없음
let name1;

// 3-3. 예약어를 사용할 수 없음 (ex. let, const, if)

// 4. 변수 명명 가이드
let salesCounnt = 1;
let refundCount = 1;
let totalSalesCount = salesCounnt - refundCount; 
 