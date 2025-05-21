'use client'

import React, { useState } from 'react'
import Button from './Button';
import Text from './Text';
import Tag from './Tag';
import Image from 'next/image'

type Props = {
    id: "tjonnas" | "norma" | "norvald",
    title: string,
    ingress: string
    imageUrl: string
}

const borderVariants = {
    tjonnas: "border-yellow-100 hover:border-yellow-300",
    norma: "border-red-100 hover:border-red-300",
    norvald: "border-blue-100 hover:border-blue-300"
}

export default function VerticalAccordionCard({id, title, ingress, imageUrl}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    
    if(!id  || !title || !ingress || !imageUrl ) {
        return undefined;
    }


    function handleClick() {
        setIsOpen(!isOpen)
    };

    function openAccordion() {
        if(!isOpen) {
            setIsOpen(!isOpen)
        }
    }

  return (
    <div>
        <div onClick={openAccordion} className={`border-2 ${isOpen ? "h-[477px] justify-start" : "h-[101px] hover:cursor-pointer justify-center"} ${borderVariants[id]} overflow-hidden flex rounded-md transition-all w-96 flex-col`}>
            {isOpen ? <Image className='mb-6 h-[208px] object-cover' src={imageUrl} width={500} height={500} alt='woman in cafe making food' /> : null}
            <div className='flex px-6 justify-between'>
                <div className='flex flex-col gap-2'>
                    <Tag variant={id} text='Kafè'/>
                    <Text variant='headline' content={title} as='h3' />
                </div>
                    {isOpen ? null : <Image src="/icons/add.svg" width={24} height={24} onClick={handleClick} className='hover:cursor-pointer' alt="Open accordion icon"/>}
            </div>
            {isOpen ? 
            <div className='px-6 mt-2 gap-2 flex flex-col'>
                <Text variant='primary' content={ingress} as='p' />
                <div className='flex justify-between'>
                    <Button variant='tertiary-fill' text='Les mer' href='/tjonnas'/>
                    <button  onClick={handleClick}  className='flex color items-center gap-2 hover:cursor-pointer text-grey-500'>
                        <Text variant='captionLabel' content='Lukk' as='span'/>
                        <Image src="/icons/Close.svg" width={24} height={24}alt="Close accordion icon"/>
                    </button>
                </div>
            </div>
            : null}
        </div> 
    </div>
  )
}
