import React from 'react';
import Abs from '../../assets/Images/Abs.png';
import AbsandArms from '../../assets/Images/AbsandArms.png';
import Cungkring from '../../assets/Images/cungkring.png';
import Box from '@mui/material/Box';
import { LinearProgress } from '@mui/material';

const BodyLevel = ({ chest, thigh, abs, glutes, arms, back, absGood, armsGood }) => {
  const image = extractImage();
  const value = 90;

  function extractImage() {
    if (absGood && armsGood) {
      return AbsandArms;
    } else if (absGood) {
      return Abs;
    } else {
      return Cungkring;
    }
  }

  return (
    <div className="flex gap-20 items-center">
      <div className="w-1/2 h-1/2">
        <img src={image} alt="Body level" />
      </div>

      <div className="flex flex-col w-full gap-5">
      <div className="w-full">
        <span>Chest</span>
      <Box sx={{ width: '100%', height: '50%' }}>
        <LinearProgress
          variant="determinate"
          value={chest}
          sx={{ height: 20 }} // Increase the height here
        />
      </Box>
      </div>
      
      <div className="w-full">
        <span>Thigh</span>
      <Box sx={{ width: '100%', height: '50%' }}>
        <LinearProgress
          variant="determinate"
          value={thigh}
          sx={{ height: 20 }} // Increase the height here
        />
      </Box>
      </div>

      <div className="w-full">
        <span>Abs</span>
      <Box sx={{ width: '100%', height: '50%' }}>
        <LinearProgress
          variant="determinate"
          value={abs}
          sx={{ height: 20 }} // Increase the height here
        />
      </Box>
      </div>

      <div className="w-full">
        <span>Glutes</span>
      <Box sx={{ width: '100%', height: '50%' }}>
        <LinearProgress
          variant="determinate"
          value={glutes}
          sx={{ height: 20 }} // Increase the height here
        />
      </Box>
      </div>

      <div className="w-full">
        <span>Arms</span>
      <Box sx={{ width: '100%', height: '50%' }}>
        <LinearProgress
          variant="determinate"
          value={arms}
          sx={{ height: 20 }} // Increase the height here
        />
      </Box>
      </div>

      <div className="w-full">
        <span>Back</span>
      <Box sx={{ width: '100%', height: '50%' }}>
        <LinearProgress
          variant="determinate"
          value={back}
          sx={{ height: 20 }} // Increase the height here
        />
      </Box>
      </div>

        </div>

    </div>
  );
}

export default BodyLevel;
