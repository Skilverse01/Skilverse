import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  const [count, setCount] = useState(0); // optional

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<h1>Home Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
