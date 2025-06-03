'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Text from '../ui/Text';

type Props = {
    name: string
    openingHours: string[]
}


export default function ToggleDropdown({name, openingHours}: Props) {

const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
    setIsOpen(!isOpen)
}

  return (
    <div>
      <div onClick={handleClick} className='flex hover:cursor-pointer'>
                <Image  className={`${isOpen ? "rotate-90" : null } transition-all`} src="/icons/Arrow right.svg" height={24} width={24} alt='icon' />
                <Text  variant='primary' extraStyling='text-white' content={name} as='p' />
            </div>
                <div className={`${isOpen ? "h-16" : "h-0"} overflow-hidden transition-all`}>
                    <div className={`grid grid-cols-2 gap-0 ${isOpen ? "opacity-100" : "opacity-0"} pl-6 transition-all text-white`}>
                        {openingHours.map((day, index) => {
                            return (
                                <Text key={index} variant='primarySmall'  content={day} as='p' />
                            )
                        })}
                    </div>
                </div>
    </div>
  )
}
