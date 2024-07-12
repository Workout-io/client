import React from 'react'
import NavBar from './Navbar'

const MainPage = ({num}) => {
  const style = {
    boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.1)"
  }

  return (      
    <div className="w-full h-full rounded-xl bg-white drop-shadow-xl px-10 py-5">
        <NavBar num={num}/>
    </div>
  )
}

export default MainPage
