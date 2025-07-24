'use client'

import React, { useEffect, useRef} from 'react'
import Form from 'next/form'
import Text from './Text';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { usePathname, useRouter, useSearchParams} from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

type Props = {
  resultsNumber: number
  setFilter: (input: string) => void
  setSlider: (input: number[]) => void
  setQuery: (input: string) => void
  shadowPriceMinMax: number[]
  filter: string
  sliderValue: number[]
  setShadowPriceMinMax: (input: number[]) => void
  setListLength: (input: number) => void
}


export default function MobileFilter({
  resultsNumber, setFilter, setSlider, setQuery, shadowPriceMinMax, filter, sliderValue, setShadowPriceMinMax, setListLength}: Props) {
    
    const isResetting = useRef(false);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

   
  const debouncedRadioUrlUpdate = useDebouncedCallback((input: string) => {
    const params = new URLSearchParams(searchParams);
    if (input) {
      params.set('filter', input);
    } else {
      params.delete('filter');
    }
    console.log("REPLACING URL", `${pathname}?${params.toString()}`);
    replace(`${pathname}?${params.toString()}`);
   }, 1);

    useEffect(() => {
      if (!filter) return;
      debouncedRadioUrlUpdate(filter);
    }, [filter, debouncedRadioUrlUpdate]);
        


  const sliderUrlUpdate = useDebouncedCallback( (input) => {
    const params = new URLSearchParams(searchParams);
    if (input) {
      params.set('price_min', input[0]);
      params.set('price_max', input[1]);
    } else {
      params.delete('price_min');
      params.delete('price_max');
    }
    console.log("REPLACING URL", `${pathname}?${params.toString()}`);
    replace(`${pathname}?${params.toString()}`);
  },200);

    
  function resetFilter(){
    isResetting.current = true;
      const params = new URLSearchParams(searchParams);
        params.delete('filter');
        params.delete('price_min');
        params.delete('price_max');
        params.delete('query');
        console.log("REPLACING URL", `${pathname}?${params.toString()}`);
        replace(`${pathname}?${params.toString()}`);
        setFilter('')
        setSlider([0, 2000])
        setQuery('')
        setListLength(10)

       setTimeout(() => {
        isResetting.current = false;
      }, 0);
    };
    

    useEffect(() => {
      if (isResetting.current || shadowPriceMinMax.length === 0) return;
      sliderUrlUpdate(sliderValue)
    }, [sliderUrlUpdate, sliderValue, shadowPriceMinMax]);
        



    const handleSliderChange = (event: number[]) => {
      setSlider(event)
      setShadowPriceMinMax(event)
    }


  return (
    <div className=' w-1/3 hidden lg:block'>
         <div
            className={`
                flex items-start justify-center bg-white  top-0 duration-500`}>  
            <Form 
                // ref={formRef} 
                action={''} 
                className='w-full flex flex-col justify-start h-[calc(100vh-83px)] px-6'
            >
                    <div className="flex justify-between border-b gap-8 border-grey-100 py-6">
                        <Text variant='headline' extraStyling='' content='Filter' as='h2'/>
                        <button onClick={resetFilter} type="reset" className='hover:cursor-pointer order-0 text-blue-600 hover:text-blue-800'>Nullstill</button>
                    </div>
                    <fieldset className='flex flex-col gap-4 pt-4'>
                        <legend className='text-base font-bold pt-4'>Sorter</legend>
                        <div className='flex gap-2'>
                            <input onChange={(e)=>setFilter(e.target.value)} id='nameAsc' checked={filter === "nameAsc" ? true : false} name='filter' value="nameAsc" type='radio'/>
                            <label className="text-base" htmlFor='nameAsc'>Navn A-Z</label>
                        </div>
                        <div className='flex gap-2'>
                            <input onChange={(e)=>setFilter(e.target.value)} id='nameDesc' checked={filter === "nameDesc" ? true : false} name='filter' value="nameDesc" type='radio'/>
                            <label className="text-base" htmlFor='nameDesc'>Navn Z-A</label>
                        </div>
                        <div className='flex gap-2'>
                            <input onChange={(e)=>setFilter(e.target.value)} id='priceAsc' checked ={filter === "priceAsc" ? true : false} name='filter' value="priceAsc" type='radio'/>
                            <label className="text-base" htmlFor='priceAsc'>Pris stigende</label>
                        </div>
                        <div className='flex gap-2'>
                            <input onChange={(e)=>setFilter(e.target.value)} id='priceDesc' checked={filter === "priceDesc" ? true : false} name='filter' value="priceDesc" type='radio'/>
                            <label className="text-base" htmlFor='priceDesc'>Pris synkende</label>
                        </div>
                    </fieldset>
                    <fieldset className=' flex flex-col gap-8 mt-4'>
                        <legend className='text-base font-bold mb-4'>Pris</legend>
                         <div className='flex justify-between'>
                             <h1 className='border border-grey-300 rounded-md flex justify-center items-center p-2 min-w-[75px] w-1/6'>{sliderValue[0]}</h1>
                             <h1 className='border border-grey-300 rounded-md flex justify-center items-center p-2 min-w-[75px] w-1/6'>{sliderValue[1]}</h1>
                         </div>
                        <RangeSlider
                         min={0}
                         max={2000}
                         value={[sliderValue[0], sliderValue[1]]}
                         onInput={(event) => handleSliderChange(event) 
                          }
                          ariaLabel={["Rangeslider minimum", "Rangeslider maximum"]}
                         />

                    </fieldset>
                    <button type='button' className='text-base mt-8 h-[44px] border flex justify-center items-center text-nowrap w-full hover:bg-yellow-350 hover:cursor-pointer rounded-lg pl-6 pr-6'>
                        {resultsNumber} resultater</button>
            </Form>
        
        </div>
  </div>
  )
}
