'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image';
import Form from 'next/form'
import Text from './Text';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


export default function MobileFilter({resultsNumber}: {resultsNumber: number}) {
    const [activeMenu, setActiveMenu] = useState(false);

    const [sliderValue, setSliderValue] = useState([100, 900])
    const formRef = useRef<HTMLFormElement>(null)

    const pathname = usePathname();
    const { replace } = useRouter();

  const handleRadioInputChange = (term) => {
    console.log(`Searching... ${term}`);
   
    const params = new URLSearchParams(window.location.search);
    if (term) {
      params.set('filter', term);
    } else {
      params.delete('filter');
    }
    console.log("REPLACING URL", `${pathname}?${params.toString()}`);
    replace(`${pathname}?${params.toString()}`);
  };

  const sliderUrlUpdate = useDebouncedCallback( (term) => {
    console.log(`Searching... ${term}`);
   
    const params = new URLSearchParams(window.location.search);
    if (term) {
      params.set('price', term);
    } else {
      params.delete('price');
    }
    console.log("REPLACING URL", `${pathname}?${params.toString()}`);
    replace(`${pathname}?${params.toString()}`);
  },300);

    // function handleInputChange() {
    //   // Submit the form when an input changes
    //   if (formRef.current) {
    //     formRef.current.requestSubmit() // modern, better than `.submit()`
    //   }
    // }

    function handleSliderInputChange(event) {
        const inputValue = `${event[0]}+TO+${event[1]}`
        console.log(inputValue)
        sliderUrlUpdate(inputValue)
        setSliderValue(event)
    }


    const closeMenu = () => {
        sliderUrlUpdate.flush()
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
                className='w-full px-6'
            >
                    <div className="flex justify-between border-b border-grey-100 py-6">
                        <Text variant='headline' extraStyling='order-1' content='Filter' as='h2'/>
                        <button className='hover:cursor-pointer order-0 text-blue-500 hover:text-blue-600'>Nullstill</button>
                        <Image className="hover:cursor-pointer active:bg-grey-100 order-2" onClick={handleOnclick} src='/icons/Close.svg' height={30} width={30} alt='icon' />
                    </div>
                    <fieldset className='flex flex-col gap-4 pt-4'>
                        <legend className='text-base font-bold pt-4'>Sorter</legend>
                        <div className='flex gap-2'>
                            <input onChange={(e)=>handleRadioInputChange(e.target.value)} id='nameAsc' name='filter' value="nameAsc" type='radio'/>
                            <label className="text-base" htmlFor='nameAsc'>Navn A-Z</label>
                        </div>
                        <div className='flex gap-2'>
                            <input onChange={(e)=>handleRadioInputChange(e.target.value)} id='nameDesc' name='filter' value="nameDesc" type='radio'/>
                            <label className="text-base" htmlFor='nameDesc'>Navn Z-A</label>
                        </div>
                        <div className='flex gap-2'>
                            <input onChange={(e)=>handleRadioInputChange(e.target.value)} id='priceAsc' name='filter' value="priceAsc" type='radio'/>
                            <label className="text-base" htmlFor='priceAsc'>Pris stigende</label>
                        </div>
                        <div className='flex gap-2'>
                            <input onChange={(e)=>handleRadioInputChange(e.target.value)} id='priceDesc' name='filter' value="priceDesc" type='radio'/>
                            <label className="text-base" htmlFor='priceDesc'>Pris synkende</label>
                        </div>
                    </fieldset>
                    <fieldset className=' flex flex-col gap-8 mt-4'>
                        <legend className='text-base font-bold mb-4'>Pris</legend>
                         <div className='flex justify-between'>
                             <h1 className='border border-grey-300 rounded-md flex justify-center items-center p-2 w-1/6'>{sliderValue[0]}</h1>
                             <h1 className='border border-grey-300 rounded-md flex justify-center items-center p-2 w-1/6'>{sliderValue[1]}</h1>
                         </div>
                        <RangeSlider
                         min={0}
                         max={1000}
                         value={sliderValue}
                         onInput={(event) => handleSliderInputChange(event) }
                         />

                    </fieldset>
                    <button type='button' onClick={closeMenu} className='text-base mt-8 h-[44px] bg-yellow-300 flex justify-center items-center text-nowrap w-full hover:bg-yellow-350 hover:cursor-pointer rounded-lg pl-6 pr-6'>
                        Vis {resultsNumber} resultater</button>
            </Form>
        
        </div>
  </div>
  )
}
