'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Text from '../ui/Text';

export default function Footer() {

const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
    setIsOpen(!isOpen)
}
  return (
    <div className=' bg-grey-500 flex flex-col'>
      <Image src="/images/Tjønnås logo med ikon-hvit.png" height={300} width={300} alt='tjonnas logo' />
        <div className='flex flex-col'>
            <div className='flex'>
                <Image onClick={handleClick} className={`${isOpen ? "rotate-90" : null } transition-all`} src="/icons/Arrow right.svg" height={24} width={24} alt='icon' />
                <Text variant='primary' extraStyling='text-white' content='Norma' as='p' />
            </div>
                <div className={`${isOpen ? "h-16" : "h-0"} overflow-hidden transition-all`}>
                    <div className={`grid grid-cols-2 gap-0 ${isOpen ? "opacity-100" : "opacity-0"} transition-all text-white`}>
                        <Text variant='primarySmall'  content='Man-Fre' as='p' />
                        <Text variant='primarySmall'  content='07:00-16:00' as='p' />
                        <Text variant='primarySmall'  content='Lørdag' as='p' />
                        <Text variant='primarySmall'  content='10:00-13:00' as='p' />
                        <Text variant='primarySmall'  content='Søndag' as='p' />
                        <Text variant='primarySmall'  content='Stengt' as='p' />
                    </div>
                </div>
        </div>
      <div>
        <Image src="/icons/Group.svg" height={24} width={24} alt='icon' />
        <Image src="/icons/Email.svg" height={24} width={24} alt='icon' />
        <Image src="/icons/Phone.svg" height={24} width={24} alt='icon' />
        <Image src="/icons/Explore.svg" height={24} width={24} alt='icon' />
        <Image src="/icons/Frame 329.svg" height={24} width={24} alt='icon' />
        <Image src="/icons/Access time.svg" height={24} width={24} alt='icon' />

      </div>
    </div>
  )
}
