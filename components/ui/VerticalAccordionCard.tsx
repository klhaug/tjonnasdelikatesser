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

const borderVariantsClosed = {
    tjonnas: "border-yellow-100 hover:border-yellow-300",
    norma: "border-red-100 hover:border-red-300",
    norvald: "border-blue-100 hover:border-blue-300" 
}

const borderVariantsOpen = {
    tjonnas: "border-yellow-300",
    norma: "border-red-300",
    norvald: "border-blue-500"
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
        <div onClick={openAccordion} className={`border-2 bg-white ${isOpen ? `h-[477px] justify-start ${borderVariantsOpen[id]}` : `h-[101px] hover:cursor-pointer justify-center ${borderVariantsClosed[id]}`} overflow-hidden flex rounded-md transition-all w-full max-w-[392px] flex-col`}>
            {isOpen ? <Image className='mb-6 h-[208px] object-cover' src={imageUrl} width={500} height={500} alt='woman in cafe making food' /> : null}
            <div className='flex px-6 justify-between'>
                <div className='flex flex-col gap-2'>
                    <Tag variant={id} textStyle='captionLabel' content='Kafè'/>
                    <Text variant='headline' content={title} as='h3' />
                </div>
                    {isOpen ? null : <Image src="/icons/add.svg" width={24} height={24} onClick={handleClick} className='hover:cursor-pointer' alt="Open accordion icon"/>}
            </div>
            {isOpen ? 
            <div className='px-6 mt-2 gap-2 flex flex-col pb-6 justify-between h-full'>
            <Text variant='primarySmall' content={ingress} as='p' />
                <div className='flex relative top-1 justify-between'>
                    <Button variant='tertiary-fill' text='Les mer' href='/tjonnas'/>
                    <button  onClick={handleClick}  className='flex color items-center gap-2 hover:cursor-pointer text-grey-500'>
                        <Text variant='captionLabel' content='Lukk' as='span'/>
                        <Image src="/icons/Close.svg" width={24} height={24}alt="Close accordion icon"/>
                    </button>
                </div>
            </div>
            : null}
        </div> 
  )
}
