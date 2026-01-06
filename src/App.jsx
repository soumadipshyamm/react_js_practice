import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");
  let value;
  const removeNo = () => {
    value = count - 1;
    if (value >= 0) {
      setCount(value);
      setMsg("");
    } else {
      setMsg("less than zero");
    }
  };
  const addNo = () => {
    value = count + 1;
    setCount(value);
    setMsg("");
  };
  return (
    <>
      <h1>++I & I++</h1>
      <div className="card">
        <button onClick={addNo}>add value</button>
        <p>total value {count}</p>
        <button onClick={removeNo}>minus value</button>
        <p>{msg}</p>
      </div>
    </>
  );
}

export default App;
