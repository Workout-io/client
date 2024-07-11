import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login.jsx";
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>,
)
