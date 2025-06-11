'use client'

import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import Text from '../ui/Text';



const borderVariantsOpen = {
  tjonnasdelikatesser: "border-yellow-350",
  catering: "border-green-500",
  norvald: "border-blue-500"
}

const menuBasedOnState = {
  tjonnasdelikatesser: "Tjønnås Delikatesser",
  catering: "Catering",
  norvald: "Norvald"
}

export default function MenuSelectDropdown({selectedMenu, setSelectedMenu}: {selectedMenu: "tjonnasdelikatesser" | "catering" | "norvald", setSelectedMenu: (value: "tjonnasdelikatesser" | "norvald" | "catering") => void}) {
  



  const [isOpen, setIsOpen] = useState(false)


   const openSelectMenu = () => {
    setIsOpen(!isOpen)
   }
  
   const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const inputValue = e.currentTarget.value;
    if(inputValue === "tjonnasdelikatesser" || inputValue === "norvald" || inputValue === "catering") {
      setSelectedMenu(inputValue);
      openSelectMenu();
    } else return;
   }


  return (
    <div className='relative'>
      <div onClick={openSelectMenu} className={`hover:cursor-pointer border-2 rounded-md justify-between flex p-4 ${borderVariantsOpen[selectedMenu]}`}>
      <Text  variant='primary' extraStyling='' content={menuBasedOnState[selectedMenu]} as='p' />
      <Image  className={`${isOpen ? null : "-rotate-90" } transition-all`} src="/icons/Arrow drop down.svg" height={24} width={24} alt='icon' />
      </div>
        <div className={`${isOpen ? "flex" : 'hidden'} absolute flex-col top-18 rounded-b-md w-full shadow-xl  bg-white border-2 border-grey-100`}>
          <button onClick={(e) => handleOnClick(e)} value="tjonnasdelikatesser" className='hover:bg-yellow-300 hover:cursor-pointer p-4'>Tjønnas Delikatesser</button>
          <button onClick={(e) => handleOnClick(e)} value="norvald" className='hover:bg-blue-500 hover:cursor-pointer p-4'>Norvald</button>
          <button onClick={(e) => handleOnClick(e)} value="catering" className='hover:bg-green-500 hover:cursor-pointer p-4 hover:text-white rounded-b-md'>Catering</button>
        </div>
    </div>
  )
}
