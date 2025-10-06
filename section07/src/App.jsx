import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";


function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current){
      isMount.current = true;
    }
    console.log("update");
  });

  // 3. 언마운트 : 죽음
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);


    const onClickButton = (value) => {
    if (value === "reset") {
      setCount(0);
    } else {
      // 이전 상태 기반으로 안전하게 업데이트s
      setCount((prev) => prev + value);
    }
  };

  return (
    <div className ="App">
    <h1>★SIMPLE COUNTER★</h1>

    <section>
      <Viewer count = {count} />
      {count % 2 === 0 ? <Even /> : null}
    </section>
    <section>
      <Controller onClickButton={onClickButton} />
    </section>

    </div>
  )
}

export default App
 