const Button = ({children, text, color = "black"}) => {
    // 이벤트 객체

    const onClickButton = (e)  => {
        console.log(e);
        console.log(text);
    };

    return (
    <button 
     onClick={onClickButton}
     // onMouseEnter={onClickButton }

    style = {{color : color}}
    >
        {text} - {color.toUpperCase()}
        {children}
        </button>
    );
};

Button.defaultProps = {
    color : "black"
};

// 구조분해 할당, 기본값 설정 가능
// props로 받아온 text, color를 사용


export default Button;