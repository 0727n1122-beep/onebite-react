// 10. Date 객체와 날짜

let date1 = new Date(); // 현재 날짜와 시간 // Date 생성자 함수
// 인수를 전달하지 않으면 -> 현재 날짜와 시간이 저장된 Date 객체 생성
console.log(date1); 

let date2 = new Date("2024/06/20/10:11:12"); // 문자열로 날짜를 지정
console.log(date2);

// 2. 타임 스탬프 ㅎ
// -> 1970년 1월 1일 0시 0분 0초(UTC)를 기준으로 경과한 시간을 밀리초 단위로 나타낸 정수
// UTC : 협정 세계시 (Universal Time Coordinated)
let ts1 = date1.getTime(); // 1970년 1월 1일 0시 0분 0초
console.log(ts1);


// 3. 날짜 구성 요소 얻기
let year = date1.getFullYear(); // 연도
let month = date1.getMonth() + 1; // 월 
let date = date1.getDate(); // 날짜
let day = date1.getDay(); // 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)

let hours = date1.getHours(); // 시
let minutes = date1.getMinutes(); // 분
let seconds = date1.getSeconds(); // 초


// 4. 날짜 구성 요소 수정하기
date1.setFullYear(2025); // 연도 수정
date1.setMonth(11); // 월 수정 (0~11)
date1.setDate(25); // 날짜 수정 (1~31)

date1.setHours(15); // 시 수정 (0~23)
date1.setMinutes(30); // 분 수정 (0~59)
date1.setSeconds(45); // 초 수정 (0~59)

console.log(date1);


// 5. 시간을 여러 포맷으로 출력하기
let str1 = date1.toString(); // 일반적인 문자열 포맷
let str2 = date1.toDateString(); // 날짜 부분만 문자열로 변환
let str3 = date1.toTimeString(); // 시간 부분만 문자열로 변환

let str4 = date1.toISOString(); // ISO 8601 표준 포맷 (국제 표준)
let str5 = date1.toLocaleString(); // 로컬 시간대에 맞춘 문자열 포맷

console.log(str1);