import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Sidebar = () => {

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 50,
    width: 420,
    borderRadius: 0.75,
    transform: 'rotate(270deg)',
    borderRadius: 5,
  }));
  

  const style = {
    boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.1)"
  }

  return (
    <div style={style} className="flex flex-col pb-5 px-2 items-center justify-center gap-5 h-full w-36 rounded-xl bg-white drop-shadow-xl">
      <BorderLinearProgress className="mt-96 mb-32" variant="determinate" value={60} />
      <div className='bg-gray-400 rounded-xl h-10 mt-16 w-1/3'></div>
      <div className='bg-gray-400 rounded-xl h-1/6 w-2/3'></div>
      <div className='bg-gray-400 rounded-xl h-1/6 mt-2 w-2/3'></div>
    </div>
  )
}

export default Sidebar
