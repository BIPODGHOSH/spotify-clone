import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

// https://v1.nocodeapi.com/bipodghosh/spotify/mKczzEqSKCgSkWVG
