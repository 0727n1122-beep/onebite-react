// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import {useState, useRef} from "react";


const Register = () => {

    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");

    const [input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : "",

}) // 객체형태로 분리 
// 복잡한 상태 관리할 때 유용

const countRef = useRef(0);
console.log(countRef); // current: 0
const inputRef = useRef(); // {current: inputRef}


const onsubmit = () => {
    if(input.name === " ") {
     // 이름을 입력하는 DOM 요소에 포커스
     inputRef.current.focus();
    }

};



const onChange = (e) => {
    countRef.current ++;
    console.log(countRef.current);

    setInput({
        ...input, 
       [e.target.name]: e.target.value
    });

}

console.log(input);

    // const onChangeName = (e) => {
    //    setInput({...input, name: e.target.value});
    // };

    // const onChangeBirth = (e) => {
    //     setInput({...input, birth: e.target.value});
    // };

    // const onChangeCountry = (e) => {
    //     setInput({...input, country: e.target.value});
    // };

    // const onChangeBio = (e) => {
    //     setInput({...input, bio: e.target.value});
    // };

    return (
        <div>

            <button onClick={() => {
                countRef.current++;
                console.log(countRef.current);
            }}>ref+1</button>

            <div>
                <input
                ref = {inputRef}
                name = "name"
                    value={input.name}
                    onChange={onChange}
                   // onChange={onChangeName}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input
                name = "birth"
                value = {input.birth}
                onChange = {onChange}
              //  onChange = {onChangeBirth}
                type="date" />
            </div>
        <div>
            <select
                name = "country"
                onChange = {onChange} value = {input.country}>
                <option></option>
                <option value="kr">대한민국</option>
                <option value="us">미국</option>
                <option value="jp">일본</option>
                <option value="cn">중국</option>
            </select>
            {<div>{input.country}</div>}
        </div>
        <div>
            <textarea
                name = "bio"
                value={input.bio}
                onChange={onChange}
                placeholder={"자기소개"}
            />
        </div>



         <button onClick = {onsubmit} >제출</button>  
        </div>
    );
};

export default Register;


