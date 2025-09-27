// JSX 문법 주의사항
// 1.중괄호 내부에는 자바스크립트 표현식(값)만 넣을 수 있다. (삼항연산자, 사칙연산, 함수호출 등)
// -> if문, for문, 변수선언 불가
// 2. 숫자, 문자열, 배열 값만 렌더링 된다 
// -> 객체, boolean, null, undefined 값은 렌더링 안됨
// 3. 모든 태그는 반드시 닫혀야 한다.
// -> <br> -> <br /> , <img> -> <img />, </h>
// 4. 최상위 태그는 반드시하나여야만 한다.
// -> Fragment 문법 사용 가능 <></>

import './Main.css';

const Main = () => {
    const user = {
        name: "Yun",
        age: 25,
        email: "yun@example.com",
        isLogin : true,
    }; 

    if (user.isLogin) {
        return (
            <div className='logout'>로그아웃</div>
        );
    } else {
            return <div>로그인</div>;
        }
        

    // return (<>
    // {user.isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>)}`
    // </>);
};

export default Main;