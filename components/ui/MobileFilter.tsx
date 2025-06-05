'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image';
import Form from 'next/form'
import Text from './Text';

export default function MobileFilter({resultsNumber}: {resultsNumber: number}) {
    const [activeMenu, setActiveMenu] = useState(false);
    const formRef = useRef<HTMLFormElement>(null)

    function handleInputChange() {
      // Submit the form when a radio button changes
      if (formRef.current) {
        formRef.current.requestSubmit() // modern, better than `.submit()`
      }
    }

    // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    //   event.preventDefault()
    //   const formData = new FormData(event.currentTarget)
    //   const selectedCategory = formData.get('category')
    //   console.log('Selected category:', selectedCategory)
    //   // Here, trigger filtering logic or update state
    // }

    const closeMenu = () => {
        setActiveMenu(false)
        document.body.style.overflowY = 'unset';
    }

    const showMenu = () => {
        setActiveMenu(true)
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }

    }

    const handleOnclick = () => {
        if(activeMenu) {
            closeMenu();
        } else {
            showMenu();
        }
    }



  return (
    <div className='flex justify-end p-6 border-b border-grey-100'>
    <button onClick={handleOnclick} className="text-base bg-white flex justify-center items-center border gap2 text-nowrap  border-gray-500 text-black hover:bg-yellow-350 hover:border-yellow-350 hover:cursor-pointer h-11 rounded-lg pl-6 pr-6">
      <Image src="/icons/Sort.svg" height={30} width={30} alt='icon' />
      Filtrer og sorter ({resultsNumber})
    </button>
         <div
            className={`${
                activeMenu ? "left-0" : "-left-[800px]"
            } h-screen w-full max-w-[800px] flex items-start justify-center bg-white z-[999] absolute top-0 duration-500`}
        >
            <Form 
                ref={formRef} 
                action={''} 
                className='w-full'
            >
                    <div className="flex justify-between border-b border-grey-100 p-6">
                        <Text variant='headline' extraStyling='order-1' content='Filter' as='h2'/>
                        <button className='hover:cursor-pointer order-0 text-blue-500 hover:text-blue-600' type='reset' onClick={handleInputChange}>Nullstill</button>
                        <Image className="hover:cursor-pointer order-2" onClick={handleOnclick} src='/icons/Close.svg' height={30} width={30} alt='icon' />
                    </div>
                    <fieldset>
                        <legend>Pris</legend>
                        <div className='flex gap-2'>
                            <input onChange={handleInputChange} id='nameAsc' name='filter' value="nameAsc" type='radio'/>
                            <label htmlFor='nameAsc'>Navn A-Z</label>
                        </div>
                        <div className='flex gap-2'>
                            <input onChange={handleInputChange} id='nameDesc' name='filter' value="nameDesc" type='radio'/>
                            <label htmlFor='nameDesc'>Navn Z-A</label>
                        </div>
                        <div className='flex gap-2'>
                            <input onChange={handleInputChange} id='priceAsc' name='filter' value="priceAsc" type='radio'/>
                            <label htmlFor='priceAsc'>Pris stigende</label>
                        </div>
                        <div className='flex gap-2'>
                            <input onChange={handleInputChange} id='priceDesc' name='filter' value="priceDesc" type='radio'/>
                            <label htmlFor='priceDesc'>Pris synkende</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Pris</legend>
                    </fieldset>
                    <button type='submit'>Vi resultater</button>
            </Form>
        
        </div>
  </div>
  )
}
