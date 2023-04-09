import React, { useState } from "react"
import {BsFillGridFill, BsHouseFill, BsAlarmFill, BsBagFill, BsCameraVideoFill, BsPersonFill, BsMessenger, BsFillGearFill, BsHeartFill } from 'react-icons/bs'

function App() {
  const [isActive, setIsActive] = useState(true); 

  return (    


    <div className="App">
      <ul className={`relative w-[300px] h-[300px] flex items-center justify-center`}>
        <li className={`z-20 absolute w-[75px] h-[75px] bg-white flex items-center justify-center rounded-full cursor-pointer transition duration-500 rotate-[315deg] ${isActive ? 'rotate-0' : ''}`} onClick={() => setIsActive(!isActive)} >
          <BsFillGridFill size={25} />
        </li>
        <li className={`z-10 list-[none] absolute left-[10px] origin-[140px] rotate-0 transition duration-500 ${isActive ? 'opacity-0 rotate-[360deg]' : ''}`}>
          <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full cursor-pointer">
            <BsHouseFill size={25} />
          </div>          
        </li>
        <li className={`z-10 list-[none] absolute left-[10px] origin-[140px] rotate-[-315deg] transition duration-500 ${isActive ? 'opacity-0 rotate-[360deg]' : ''}`}>
          <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full cursor-pointer rotate-[-45deg]">
            <BsAlarmFill size={25} />
          </div>          
        </li>
        <li className={`z-10 list-[none] absolute left-[10px] origin-[140px] rotate-[-270deg] transition duration-500 ${isActive ? 'opacity-0 rotate-[360deg]' : ''}`}>
          <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full cursor-pointer rotate-[-90deg]">
            <BsBagFill size={25} />
          </div>          
        </li>
        <li className={`z-10 list-[none] absolute left-[10px] origin-[140px] rotate-[-225deg] transition duration-500 ${isActive ? 'opacity-0 rotate-[360deg]' : ''}`}>
          <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full cursor-pointer rotate-[-135deg]">
            <BsCameraVideoFill size={25} />
          </div>          
        </li>
        <li className={`z-10 list-[none] absolute left-[10px] origin-[140px] rotate-[-180deg] transition duration-500 ${isActive ? 'opacity-0 rotate-[360deg]' : ''}`}>
          <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full cursor-pointer rotate-[-180deg]">
            <BsPersonFill size={25} />
          </div>          
        </li>
        <li className={`z-10 list-[none] absolute left-[10px] origin-[140px] rotate-[-135deg] transition duration-500 ${isActive ? 'opacity-0 rotate-[360deg]' : ''}`}>
          <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full cursor-pointer rotate-[-225deg]">
            <BsMessenger size={25} />
          </div>
          
        </li>
        <li className={`z-10 list-[none] absolute left-[10px] origin-[140px] rotate-[-90deg] transition duration-500 ${isActive ? 'opacity-0 rotate-[360deg]' : ''}`}>
          <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full cursor-pointer rotate-[-270deg]">
            <BsFillGearFill size={25} />
          </div>
          
        </li>
        <li className={`z-10 list-[none] absolute left-[10px] origin-[140px] rotate-[-45deg] transition duration-500 ${isActive ? 'opacity-0 rotate-[360deg]' : ''}`}>
          <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full cursor-pointer rotate-[-315deg]">
            <BsHeartFill size={25} />
          </div>
          
        </li>
      </ul>
    </div>
  )
}

export default App
