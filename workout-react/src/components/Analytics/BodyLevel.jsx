import React, { useState, useEffect } from 'react';
import Abs from '../../assets/Images/Abs.png';
import AbsandArms from '../../assets/Images/AbsandArms.png';
import Cungkring from '../../assets/Images/cungkring.png';
import Box from '@mui/material/Box';
import { LinearProgress } from '@mui/material';

const BodyLevel = () => {
  const [chest, setChest] = useState(0);
  const [legs, setLegs] = useState(0);
  const [abs, setAbs] = useState(0);
  const [glutes, setGlutes] = useState(0);
  const [arms, setArms] = useState(0);
  const [back, setBack] = useState(0);
  const [absGood, setAbsGood] = useState(false);
  const [armsGood, setArmsGood] = useState(false);
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  const image = extractImage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://be-production.vercel.app/api/stats');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result.data[0].arm);
        setArms(result.data[0].arm);
        setLegs(result.data[0].legs);
        setAbs(result.data[0].abs);
        setChest(result.data[0].chest);
        setGlutes(result.data[0].glutes);
        setBack(result.data[0].back);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function extractImage() {
    if (absGood && armsGood) {
      return AbsandArms;
    } else if (absGood) {
      return Abs;
    } else {
      return Cungkring;
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="font-medium flex flex-row gap-3">
        Hi, <span className="font-medium">User!</span>
      </div>
      <div className="flex gap-20 items-center">
        <div className="w-1/2 h-1/2">
          <img src={image} alt="Body level" />
        </div>
        <div className="flex flex-col w-full gap-5 bg-stone-200 px-5 py-5 rounded-xl shadow-xl font-medium">
          <div className="w-full">
            <span>Chest</span>
            <Box sx={{ width: '100%', height: '50%' }}>
              <LinearProgress variant="determinate" value={chest} sx={{ height: 20 }} />
            </Box>
          </div>
          <div className="w-full">
            <span>Legs</span>
            <Box sx={{ width: '100%', height: '50%' }}>
              <LinearProgress variant="determinate" value={legs} sx={{ height: 20 }} />
            </Box>
          </div>
          <div className="w-full">
            <span>Abs</span>
            <Box sx={{ width: '100%', height: '50%' }}>
              <LinearProgress variant="determinate" value={abs} sx={{ height: 20 }} />
            </Box>
          </div>
          <div className="w-full">
            <span>Glutes</span>
            <Box sx={{ width: '100%', height: '50%' }}>
              <LinearProgress variant="determinate" value={glutes} sx={{ height: 20 }} />
            </Box>
          </div>
          <div className="w-full">
            <span>Arms</span>
            <Box sx={{ width: '100%', height: '50%' }}>
              <LinearProgress variant="determinate" value={arms} sx={{ height: 20 }} />
            </Box>
          </div>
          <div className="w-full">
            <span>Back</span>
            <Box sx={{ width: '100%', height: '50%' }}>
              <LinearProgress variant="determinate" value={back} sx={{ height: 20 }} />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyLevel;
