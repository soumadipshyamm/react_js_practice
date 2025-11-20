import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import PdfViewer from "./components/pages/PdfViewer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pdf" element={<PdfViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
