import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js'; // Import your custom theme

import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes> 
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
