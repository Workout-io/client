import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";

import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>,
)
