import React from 'react';
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
    const data = {
        labels: ['Arms', 'Glutes', 'Back', 'Abs', 'Chest', 'Legs'],
        datasets: [{
            label: 'Your Body Parts',
            data: [3, 6, 9, 10, 11, 12],
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
