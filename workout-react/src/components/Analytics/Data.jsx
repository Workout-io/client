import React, {useState, useEffect} from 'react';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
)

const Data = () => {
  const [chest, setChest] = useState(0);
  const [legs, setLegs] = useState(0);
  const [abs, setAbs] = useState(0);
  const [glutes, setGlutes] = useState(0);
  const [arms, setArms] = useState(0);
  const [back, setBack] = useState(0);
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

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

    const data = {
        labels: ['Arms', 'Legs', 'Back', 'Abs', 'Chest', 'glutes'],
        datasets: [{
            label: 'Overall Body Growth',
            data: [arms, legs, back, abs, chest, glutes],
            backgroundColor: 'rgba(96, 165, 250, 0.5)',
            borderColor: 'black',
        }]
    }

    const options = {

    }

  return (
    <div className="w-96 h-96">
      <Radar
      data = {data}
      options = {options}>
      </Radar>
    </div>
  )
}

export default Data
