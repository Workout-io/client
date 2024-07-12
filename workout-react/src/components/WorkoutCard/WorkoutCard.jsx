import React from 'react';
import Pushups from '../../assets/Images/Pushups.jpg';
import Squat from '../../assets/Images/squat.png';
import Situp from '../../assets/Images/situp.jpg';
import Dumbell from '../../assets/Images/DumbellCurl.jpg';
import Plank from '../../assets/Images/Plank.jpg';
import Lunges from '../../assets/Images/Lunges.jpg';

const WorkoutCard = ({ title, rep, repDone, imageType, targetMuscle }) => {
  const image = images(imageType); // Use title to determine the image

  function images(imageType) {
    switch (title) {
      case "Push Up":
        return Pushups;
      case "Squats":
        return Squat;
      case "Sit Up":
        return Situp;
      case "Dumbell Curl":
        return Dumbell;
      case "Plank":
        return Plank;
      case "Lunges":
        return Lunges;
      default:
        return Pushups; // Handle default case or unknown titles gracefully
    }
  }
  
  function setTitle(title) {
    switch (title) {
      case "Chest":
        return "Push Up";
      case "Thigh":
        return "Squat";
      case "Abs":
        return "Sit Up";
      case "Glutes":
        return "Lunges";
      case "Back":
        return "Plank";
      case "Arms":
        return "Dumbell Curl";
      default:
        return title; // Return the original title if no match found
    }
  }



  return (
    <div className="flex flex-col w-60 h-72 bg-stone-200 shadow-xl rounded-xl pb-10">
      <img src={image} className="w-full h-40" alt={title} />
      <div className="h-full w-full flex flex-col px-5 py-8">
        <span className="font-medium text-xl mb-3">{setTitle(title)}</span>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span>Target Muscle: </span>
            <span className="bg-blue-400 p-2 rounded-md">{targetMuscle}</span>
          </div>
          <div className="bg-blue-400 w-fit p-2 rounded-md text-white">
            <span>{repDone}</span> / <span>{rep}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
