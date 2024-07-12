import React from 'react'
import NavBar from './Navbar'
import Data from './Analytics/Data'
import WorkoutSummary from './Analytics/WorkoutSummary'

const MainPage = ({num}) => {
  const style = {
    boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.1)"
  }

  return (      
    <div style={style} className="w-full h-full rounded-xl bg-white drop-shadow-xl px-10 py-5 gap-10">
        <NavBar num={num}/>
        <div className="h-full w-full flex pt-12 gap-3 justify-center pt-40">
            <div className="h-fit w-fit bg-stone-100 pb-8 pt-4 rounded-xl">
              <Data/>
            </div>
            <div className="flex flex-col w-52 gap-2">
            <div className="flex flex-col h-fill w-52 bg-stone-100 py-2 px-2 rounded-xl gap-2">
              <div className="font-medium">Coming up Next</div>
              <WorkoutSummary/>
              <WorkoutSummary/>
              <WorkoutSummary/>
              <WorkoutSummary/>
              <WorkoutSummary/>
              <WorkoutSummary/>
            </div>
            <div className="flex justify-center items-center w-full h-24 bg-stone-100 rounded-xl font-semibold">Keep Going!</div>
            </div>
        </div>
    </div>
  )
}

export default MainPage
