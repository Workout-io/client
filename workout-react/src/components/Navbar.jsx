import React from 'react'
import TopMenu from './TopMenu/TopMenu'
import Button from './Button'

const Navbar = ({num}) => {
  return (
    <div className="w-full h-14 flex justify-between text-black justify-items-center">
      <div className="flex font-semibold text-xl justify-items-center items-center">BRAND NAME</div> 
      <TopMenu choose = {num}/>
      <Button title="Log Out" route="/"></Button>
    </div>
  )
}

export default Navbar
