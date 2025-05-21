'use client'

import React, { useState } from 'react'
import Button from './Button';
import Text from './Text';
import Tag from './Tag';
import Image from 'next/image'

export default function VerticalAccordionCard() {

    const [isOpen, setIsOpen] = useState(true);

    function handleClick() {
        setIsOpen(!isOpen)
    };

  return (
    <div>
        <div className={`border ${isOpen ? "h-[477px]" : "h-20"} overflow-hidden flex  justify-center transition-all w-96 flex-col`}>
            {isOpen ? <Image src="/images/241A9065.jpg" width={500} height={500} alt='woman in cafe making food' /> : null}
            <div className='flex flex-col'>
                <Tag variant='norma' text='Kafè'/>
                <div className='flex justify-between'>
                    <Text variant='headline' content='Tjønnås Delikatesser' as='h3' />
                    <button onClick={handleClick}>+</button>
                </div>
            </div>
            {isOpen ? <Text variant='primary' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente. Fuga est quae cupiditate expedita sunt impedit commodi, voluptate sapiente non odit, obcaecati ullam similique dolores dolor! At, totam nemo.' as='p' /> : null}
            {isOpen ? <Button variant='tertiary-fill' text='Les mer' href='/tjonnas'/> : null}
        </div> 
    </div>
  )
}
