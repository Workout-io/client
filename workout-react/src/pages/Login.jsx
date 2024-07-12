import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  async function loginTrial() {
    try {
      const response = await fetch('https://be-production.vercel.app/api/accounts/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: user, password: pass }),
      });

      if (response.status != "200") {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      console.log("Login successful");

      window.location.href = '/home';
    } catch (error) {
      console.error("Error:", error.message);
      setError("Invalid username or password");
    }
  }

  function handleChange(e) {
    setUser(e.target.value);
  }

  function handlePass(e) {
    setPass(e.target.value);
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-blue-300 xs:w-full sm:w-full md:w-1/3 lg:w-1/3 h-3/4 xl:w-1/3 p-4 rounded-lg'>
        <h1 className="text-center mt-12 text-2xl text-white mb-12 font-body">Log in</h1>
        <div className='justify-center items-center gap-4 flex flex-col'>
          <TextField
            onChange={handleChange}
            value={user}
            className="w-3/4"
            variant="outlined"
            label="Username"
            type="text"
          />
          <TextField
            onChange={handlePass}
            value={pass}
            className="w-3/4"
            variant="outlined"
            label="Password"
            type="password"
          />
          {error && <div className="text-red-500 text-center mt-2">{error}</div>}
          <Button
            onClick={loginTrial}
            variant="contained"
            size="large"
            className='w-3/4 font-semibold mt-4'
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
