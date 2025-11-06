import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import SignUp from "./Components/Signup";
import ProfilePage from "./Components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
         <Route path="/Signup" element={<SignUp />} />
        <Route path="/ProfilePage" element={ProfilePage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App