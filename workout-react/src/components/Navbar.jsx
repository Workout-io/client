import React from 'react'
import TopMenu from './TopMenu/TopMenu'
import Button from './Button'

const Navbar = ({num}) => {
  return (
    <div className="w-full h-14 flex justify-between text-black justify-items-center">
      <div className="flex font-semibold text-3xl justify-items-center items-center"><span className="text-black">PT</span><span className="text-blue-400">.ai</span></div> 
      <TopMenu choose = {num}/>
      <Button title="Log Out" route="/"></Button>
    </div>
  )
}

export default Navbar
