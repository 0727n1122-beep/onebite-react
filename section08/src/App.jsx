
import "./App.css";
import {useState, useRef, useReducer} from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import Exam from "./components/Exam";

  const MockData = [
{
  id : 0,
  isDone : false,
  content : "React 공부하기 Reactを勉強する",
  date : new Date().getTime(),
},
{
  id : 1,
  isDone : false,
  content : "러닝 30분 하기 ランニング30分",
  date : new Date().getTime(),
},
{
  id : 2,
  isDone : false,
  content : "과제 제출하기 課題を提出する",
  date : new Date().getTime(),
}
];

function reducer (state, action) {
  switch(action.type) {
    case "CREATE" 
    : return [action.data, ...state];
    case "UPDATE" 
    : return state.map((item) => item.id === action.targetId.id
     ? { ...item, isDone: action.targetId.isDone } 
     : item);
     case "DELETE" 
     : return state.filter((item) => item.id !== action.targetId);
     default : return state;

}
}

function App() {
  const [todos, dispatch] = useReducer(reducer, MockData);
  const idRef = useRef(3);


  const onCreate = (content) => {
    dispatch ({
      type : "CREATE",
      data : {
        id : idRef.current++,
        isDone : false,
        content,
        date : new Date().getTime(),
      }
    })
  };

 const onUpdate = (targetId) => {
  //todos State 값들 중에서
  // id 값이 targerId와 같은 항목을 찾아서
  // isDone 값을 변경하기 

  // 인수 : todos 배열에서 targerId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열
  dispatch({
    type: "UPDATE",
    targetId : {
     targetId: targetId
    },
  });
};

const onDelete = (targetId) => {
  // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
  dispatch({
    type: "DELETE",
    targetId: targetId
  });
};



  return (
    <div className="App">
      {/* <Exam />  */}
      
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;