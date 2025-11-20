import { useState } from "react";

const Home = () => {
  const [text, settext] = useState("Test Code");

  return (
    <>
      <button onClick={() => settext("Home")}>Home</button>
      <button onClick={() => settext("About")}>About</button>
      <button onClick={() => settext("Susmita is my best Teacher")}>
        Contact
      </button>
      <h1>{text}</h1>
      <h1>text</h1>
    </>
  );
};

export default Home;
