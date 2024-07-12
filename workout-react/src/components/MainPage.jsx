import React from 'react';
import NavBar from './Navbar';
import Data from './Analytics/Data';
import WorkoutSummary from './Analytics/WorkoutSummary';

const MainPage = ({ num }) => {
  const style = {
    boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.1)"
  }

  return (
    <div style={style} className="relative w-full h-full rounded-xl bg-white drop-shadow-xl px-10 py-5 gap-10 overflow-hidden">
      <NavBar num={num} />
      <div className="h-full w-full flex pt-12 gap-3 justify-center pt-40">
        <div className="h-fit w-fit bg-stone-100 pb-8 pt-4 rounded-xl">
          <Data />
        </div>
        <div className="flex flex-col w-52 gap-2">
          <div className="flex flex-col h-fill w-52 bg-stone-100 py-2 px-2 rounded-xl gap-2">
            <div className="font-medium">Coming up Next</div>
            <WorkoutSummary />
            <WorkoutSummary />
            <WorkoutSummary />
            <WorkoutSummary />
            <WorkoutSummary />
            <WorkoutSummary />
          </div>
          <div className="flex justify-center items-center w-full h-24 bg-stone-100 rounded-xl font-semibold">Keep Going!</div>
        </div>
      </div>
      <div className="pt-96 absolute inset-0 pointer-events-none">
        <svg className="pt-56 w-full h-auto" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <g transform="scale(1, -1) translate(0, -320)">
            <path fill="#000" fillOpacity="1" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,208C672,224,768,224,864,192C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default MainPage;
