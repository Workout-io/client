import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Popup from './Popup';
import WorkoutCard from './WorkoutCard/WorkoutCard';

const WorkoutPage = ({ GPT, num, changeOpen }) => {
  const [GPTwork, setGPTwork] = useState([]);
  const [render, setRender] = useState(false);

  function handlePush() {
    window.location.href = "/workout/situp";
  }

  function handleDumb() {
    window.location.href = "/workout/dumbell";
  }

  useEffect(() => {
    if (GPT && GPT.data ) {
      setGPTwork(GPT.data.workout);
      setRender(true);
    } else {
      setGPTwork(["l"]); // Reset to empty array if GPT or its data is not available
    }
    console.log(GPT);
    console.log(GPTwork);
  }, [GPT]);

  const style = {
    boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.1)"
  };

  return (
    <div style={style} className="flex flex-col w-full h-full rounded-xl bg-white drop-shadow-xl px-10 py-5 gap-10">
      <Navbar num={num}/>
      <div onClick={changeOpen}>
        <button style={{ cursor: "pointer", boxShadow: "5px 5px 0px 0px rgb(59, 130, 246, 1)" }}
          className="w-auto h-full rounded-md px-5 font-medium bg-blue-400 text-white">Add Plan</button>
      </div>
      <div className="h-full flex justify-center items-center">
        {render ? (
          GPTwork.map((item, index) => (
            <WorkoutCard title={item} rep="10" repDone="0" image-type="Push Up" targetMuscle="Legs"/>
          ))
        ) : (
          <p></p>
        )}
        <div onClick={handlePush}>
        <WorkoutCard onClick={handlePush} className="pr-10" title="Sit Up" rep="10" repDone="0" image-type="Sit Up" targetMuscle="Abs"/>
        </div>
        <div onClick={handleDumb}>
        <WorkoutCard onClick={handlePush} className="pr-10" title="Dumbell Curl" rep="10" repDone="0" image-type="Dumbell Curl" targetMuscle="Arms"/>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
