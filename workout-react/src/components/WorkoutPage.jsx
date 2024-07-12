import React from 'react'
import Navbar from './Navbar'
import Popup from './Popup'


import WorkoutCard from './WorkoutCard/WorkoutCard'

const WorkoutPage = ({num, changeOpen}) => {
    const style = {
      boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.1)"
    }
  
    return (     
       
      <div style={style} className="flex flex-col w-full h-full rounded-xl bg-white drop-shadow-xl px-10 py-5 gap-10">
          <Navbar num={num}/>
          <div onClick={changeOpen}>
            <button style={{ cursor: "pointer", boxShadow: "5px 5px 0px 0px rgb(59, 130, 246, 1)" }}
            className="w-auto h-full rounded-md px-5 font-medium bg-blue-400 text-white">Add Plan</button>
          </div>

          <div className=" h-full flex justify-center items-center">
            <WorkoutCard/>
          </div>
      </div>
    )
  }

export default WorkoutPage
