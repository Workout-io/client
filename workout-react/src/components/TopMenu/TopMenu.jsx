import React from 'react'
import MenuButton from './MenuButton.jsx'
import {useState} from 'react';

const TopMenu = ({choose}) => {

  const num = parseInt(choose);

  const homeObj = function homeSet() {
    if (num == 0) {
      return {
        color: "#60a5fa",
        text: "#ffffff"
      }
    } else {
      return {
        color: "",
        text: "#57534e"
      }
        
    }
  }

  const workObj = function set() {
    if (num == 1) {
      return {
        color: "#60a5fa",
        text: "#ffffff"
      }
    } else {
      return {
        color: "",
        text: "#57534e"
      }
        
    }
  }

  const profObj = function set() {
    if (num == 2) {
      return {
        color: "#60a5fa",
        text: "#ffffff"
      }
    } else {
      return {
        color: "",
        text: "#57534e"
      }
        
    }
  }



  return (
    <div className="h-full w-auto flex p-1 bg-stone-300 rounded-md">
      <MenuButton title="Home" route="/home" color={homeObj().color} text={homeObj().text}></MenuButton>
      <MenuButton title="Workout" route="/workout" color={workObj().color} text={workObj().text}></MenuButton>
      <MenuButton title="Profile" route="/profile" color={profObj().color} text={profObj().text}></MenuButton>
    </div>
  )
}

export default TopMenu
