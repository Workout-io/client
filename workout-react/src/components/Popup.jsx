import Button from '@mui/material/Button';
import {useState} from 'react';
export default function Popup({open, setOpen, setGPT}) {
    const[weight, setWeight] = useState('');
    const[height, setHeight] = useState('');
    const [muscleTargets, setMuscleTargets] = useState([]);

    const submitInfo = async () => {
        const obj = {
            weight: weight,
            height: height,
            muscle_target: muscleTargets
        };

        console.log(obj);

        try {
            const response = await fetch('https://be-workoutio-git-main-vinzzzttys-projects.vercel.app/newPlans/generate-plan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
            setGPT(data);

            setOpen(false); // Close the popup on successful submission
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const handleChange = (event) => {
        if (event.target.type === 'checkbox') {
          setMuscleTargets([
            ...muscleTargets,
            event.target.name
          ]);
        } else {
          switch (event.target.name) {
            case 'weight':
              setWeight(event.target.value);
              break;
            case 'height':
              setHeight(event.target.value);
              break;
            default:
              break;
          }
        }
      };


    return(
    <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible pointer-events-auto' : 'invisible pointer-events-none'} bg-black/50`}>
        <div className="bg-white text-black justify-center rounded-xl items-center w-1/4 h-3/4 p-6">
            <div className="text-center text-2xl pt-10 pb-7 font-medium relative">
                Create a new plan! 
                <span className='absolute top-2 right-2 cursor-pointer' onClick={setOpen}>&times;</span>
            </div>
            
        <div className="flex flex-col px-12">
                    <label className="mb-2 text-xl font-medium">Weight</label>
                    <input className="outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" type="text" name="weight" value={weight} onChange={handleChange}/>
                    <label className="mb-2 text-xl pt-7 font-medium">Height</label>
                    <input className="outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" type="text" name="height" value={height} onChange={handleChange}/>
                    <label className="mb-2 text-xl pt-7 font-medium">Muscle Target</label>
                    <div>
                        <div>
                            <input className="ml-3 outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" name="Abs" value={true} type="checkbox" onChange={handleChange}/>
                            <label className="ml-3 mb-2 text-xl pt-7 font-medium">Abs</label>
                        </div>
                        <div>
                            <input className="ml-3 outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" name ="Squat" type="checkbox" onChange={handleChange}/>
                            <label className="ml-3 mb-2 text-xl pt-7 font-medium">Squat</label>
                        </div>
                        <div>
                            <input className="ml-3 outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" name ="Thigh" type="checkbox" onChange={handleChange}/>
                            <label className="ml-3 mb-2 text-xl pt-7 font-medium">Thigh</label>
                        </div>
                        <div>
                            <input className="ml-3 outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" name ="Glutes" type="checkbox" onChange={handleChange}/>
                            <label className="ml-3 mb-2 text-xl pt-7 font-medium">Glutes</label>
                        </div>
                        <div>
                            <input className="ml-3 outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" name ="Arm" type="checkbox" onChange={handleChange}/>
                            <label className="ml-3 mb-2 text-xl pt-7 font-medium">Arm</label>
                        </div>
                        <div>
                            <input className="ml-3 outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" name ="Back" type="checkbox" onChange={handleChange}/>
                            <label className="ml-3 mb-2 text-xl pt-7 font-medium">Back</label>
                        </div>
            </div>
            <div className="flex justify-center mt-6">
                <Button onClick={submitInfo} variant="contained" size="large" className="w-full font-semibold">Submit</Button>
            </div>
        </div>
        </div>
    </div>
    );
}