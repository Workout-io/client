import React, { useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Cungkring from '../assets/Images/cungkring.png'
import Abs from '../assets/Images/Abs.png';
import AbsandArms from '../assets/Images/AbsandArms.png';


const Sidebar = ({abs, arms}) => {
  const avatar = avatarStage();
  const today = new Date();
  const [progress, setProgress] = useState(50);

  const day = today.toLocaleDateString('en-US', {
    weekday: 'long',
  });

  const number = today.toLocaleDateString('en-US', {
    day: 'numeric'
  });

  const month = today.toLocaleDateString('en-US', {
    month: 'long',
  });

  const year = today.toLocaleDateString('en-US', {
    year: 'numeric',
  });

  function avatarStage() {
    if (abs && arms) {
      return AbsandArms;
    } else if (abs) {
      return Abs;
    } else {
      return Cungkring;
    }
  }

  // const VerticalLinearProgress = styled(LinearProgress)(({ theme }) => ({
  //   height: 200, // Height of the progress bar
  //   width: 10,  // Width of the progress bar
  //   transform: 'rotate(270deg)', // Rotate to make it vertical
  //   borderRadius: 5, // Optional: make the edges rounded
  // }));
  
  // const VerticalProgressBar = ({ value }) => {
  //   return (
  //     <div style={{ display: 'flex', alignItems: 'center', height: '200px', width: '10px' }}>
  //       <VerticalLinearProgress variant="determinate" value={value} />
  //     </div>
  //   );
  // }

  const style = {
    boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.1)"
  }

  return (
    <div style={style} className="flex flex-col pb-5 px-2 items-center justify-center gap-10 h-full w-36 rounded-xl bg-white drop-shadow-xl">
      <div className="font-medium">
        <div>{day}<span>,</span></div>
        <div>{month}<span> </span><span>{number}</span></div>
        <div>{year}</div>
      </div>
      {/* <VerticalProgressBar value={progress} /> */}
      {/* <div className="flex justify-center h-10 mt-16 w-1/3 text-2xl font-medium">XP</div> */}
      <div className='flex rounded-xl h-1/6 w-2/3 justify-center'>
      <img src={avatar} className="h-32 w-auto"></img>
      </div>
    </div>
  )
}

export default Sidebar
