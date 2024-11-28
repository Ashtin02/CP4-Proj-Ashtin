import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import "./CSS/index.css"


//Has the Header for both pages and routes between home and login page
function App() {
  return (
    <>
      <Header />
      <h1>The Phone Booth</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      </>
  )
    ;
}

export default App;
