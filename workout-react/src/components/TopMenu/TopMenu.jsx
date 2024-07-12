import React from 'react'
import MenuButton from './MenuButton.jsx'

const TopMenu = () => {
  return (
    <div className="h-full w-auto flex p-1 bg-stone-300 rounded-md">
      <MenuButton title="Home" route="/Home" color="#60a5fa" text="#ffffff"></MenuButton>
      <MenuButton title="Workout" route="/Workout" text="#57534e"></MenuButton>
      <MenuButton title="Profile" route="/Profile" text="#57534e"></MenuButton>
    </div>
  )
}

export default TopMenu
