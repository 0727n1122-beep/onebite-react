import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

    const onClickButton = (value) => {
    if (value === "reset") {
      setCount(0);
    } else {
      // 이전 상태 기반으로 안전하게 업데이트
      setCount((prev) => prev + value);
    }
  };

  return (
    <div className ="App">
    <h1>★SIMPLE COUNTER★</h1>

    <section>
      <Viewer count = {count} />
    </section>
    <section>
      <Controller onClickButton={onClickButton} />
    </section>

    </div>
  )
}

export default App
 