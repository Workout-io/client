import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import PushRecord from "./pages/Record.jsx";
import SquatRecord from "./pages/SquatRecord.jsx";
import LungesRecord from "./pages/LungesRecord.jsx";
import SitRecord from "./pages/SitRecord.jsx";




import Workout from "./pages/Workout.jsx";
import Profile from "./pages/Profile.jsx";


import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js'; 

import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/workout" element={<Workout/>}></Route>
        <Route path="/workout/pushup" element={<PushRecord/>}></Route>
        <Route path="/workout/squat" element={<SquatRecord/>}></Route>
        <Route path="/workout/lunges" element={<LungesRecord/>}></Route>
        <Route path="/workout/situp" element={<SitRecord/>}></Route>


        <Route path="/profile" element={<Profile/>}></Route>

      </Routes> 
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
