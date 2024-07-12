import React from 'react'
import NavBar from './Navbar'
import Data from './Analytics/Data'

const MainPage = ({num}) => {
  const style = {
    boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.1)"
  }

  return (      
    <div className="w-full h-full rounded-xl bg-white drop-shadow-xl px-10 py-5 gap-10">
        <NavBar num={num}/>
        <div className="h-full w-full flex justify-center items-center">
            <Data></Data>
        </div>
    </div>
  )
}

export default MainPage
