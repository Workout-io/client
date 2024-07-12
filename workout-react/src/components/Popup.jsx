import Button from '@mui/material/Button';
import {useState} from 'react';
export default function Popup({active}) {

    const [on, setOn] = useState(active);

    function toggleOn() {
        setOn(!on);
    }


    return(
    <div className={`fixed inset-0 flex justify-center items-center transition-colors ${on ? 'visible pointer-events-auto' : 'invisible pointer-events-none'} bg-black/50`}>
        <div className="bg-white text-black justify-center rounded-xl items-center w-1/4 h-3/4 p-6">
            <div className="text-center text-2xl pt-10 pb-7 font-medium relative">
                Create a new plan! 
                <span className='absolute top-2 right-2 cursor-pointer' onClick={toggleOn}>&times;</span>
            </div>
            
        <div className="flex flex-col px-12">
                    <label className="mb-2 text-xl font-medium">Weight</label>
                    <input className="outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" type="text" />
                    <label className="mb-2 text-xl pt-7 font-medium">Height</label>
                    <input className="outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" type="text" />
                    <label className="mb-2 text-xl pt-7 font-medium">Muscle Target</label>
                    <div>
                        <div>
                            <input className="ml-3 outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" name="Abs" value={true} type="checkbox" />
                            <label className="ml-3 mb-2 text-xl pt-7 font-medium">Abs</label>
                        </div>
                        <div>
                            <input className="ml-3 outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" value="Squat" type="checkbox" />
                            <label className="ml-3 mb-2 text-xl pt-7 font-medium">Squat</label>
                        </div>
                        <div>
                            <input className="ml-3 outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" value="Thigh" type="checkbox" />
                            <label className="ml-3 mb-2 text-xl pt-7 font-medium">Thigh</label>
                        </div>
                        <div>
                            <input className="ml-3 outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" value="Glutes" type="checkbox" />
                            <label className="ml-3 mb-2 text-xl pt-7 font-medium">Glutes</label>
                        </div>
                        <div>
                            <input className="ml-3 outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" value="Arm" type="checkbox" />
                            <label className="ml-3 mb-2 text-xl pt-7 font-medium">Arm</label>
                        </div>
                        <div>
                            <input className="ml-3 outline-none border-gray-300 border rounded-md p-2 focus:border-blue-500" value="Back" type="checkbox" />
                            <label className="ml-3 mb-2 text-xl pt-7 font-medium">Back</label>
                        </div>
            </div>
            <div className="flex justify-center mt-6">
                <Button variant="contained" size="large" className="w-full font-semibold">Submit</Button>
            </div>
        </div>
        </div>
    </div>
    );
}