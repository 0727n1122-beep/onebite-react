// 14. Async&amp; Await

// async 
// 어떤 함수를 비동기 함수로 만들어주는 키워드 
// 함수가 프로미스를 반환하도록 변환해주는 키워드 

async function getData(){
    return {
        name : "홍길동",
        id : "winterlood",

    };
}  // getData() 함수는 프로미스를 반환함

console.log(getData()); // Promise { { name: '홍길동', id: 'winterlood' } }




// await
// async 함수 내부에서만 사용 가능
// 비동기 함수가 다 처리되기를 기다리는 역할 
// then() 메서드 대신 사용할 수 있음

async function displayData() {
    const data = await getData(); // getData() 함수가 처리될 때까지 기다림
    console.log(data);
}

displayData(); // { name: '홍길동', id: 'winterlood' }

// await 키워드는 async 함수 내부에서만 사용 가능 