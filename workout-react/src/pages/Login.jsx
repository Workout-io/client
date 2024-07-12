import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react'


export default function App() {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")


    function handleChange(e) {
        setUser(e.target.value);
        console.log(user);

    }

    function handlePass(e) {
        setPass(e.target.value);
        console.log(pass);
    }

    function loginTrial() {
        if (user == "user" && pass == "pass") {
            console.log("success");
            window.location.href = '/home'; 
        } else {
            console.log("fail");
        }
    }

    return(
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-blue-300 xs:w-full sm:w-full md:w-1/3 lg:w-1/3 h-3/4 xl:w-1/3'>
                <h1 className="text-center mt-12 text-2xl text-white mb-12 font-body">Log in</h1>
                <div className='justify-center items-center gap-4 flex flex-col'>
                    <TextField onChange={handleChange} className="w-3/4" variant="outlined" label="Username" type="username" />
                    <TextField onChange={handlePass} className="w-3/4" variant="outlined" label="Password" type="password" />
                    <Button onClick={loginTrial} variant="contained" size="large" className='w-3/4 font-semibold'>Log In</Button>
                </div>
            </div>
        </div>
    );
}