'use client'

import React, { useState, MouseEvent } from 'react'
import SoMeCard from '../ui/SoMeCard'
import Text from '../ui/Text'
import Script from 'next/script'
import Image from 'next/image'

type FakeSomeDatabase = {
    id: "tjonnas" | "norma" | "norvald"
    account: string
    date: string
    post: string
    imageUrl: string
}


export default function SoMe() {
const [currentCafe, setCurrentCafe] = useState("tjonnas")


const handleOnclick = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentCafe(event.currentTarget.value)
    console.log(currentCafe)
}




  
    return (
        <div className='flex flex-col items-center max-w[-768px] justify-center md:py-18'>
            <Script src='https://cdn.lightwidget.com/widgets/lightwidget.js'/>
            <div className='px-6 py-14 w-full max-w-[540px] flex flex-col md:max-w-[1440px] gap-4 md:gap-8 md:px-12 items-start'>
                    <div className='flex flex-col gap-2'>
                        <Text content='Små øyeblikk' variant='subheadline' as='h3' />
                        <Text content='Se hva som skjer' variant='headline' as='h2' />
                    </div>


                   <section className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 w-full'>
                            {/* TJONNAS WIDGET */}
                            <div className='border rounded-md border-yellow-100 shadow p-4'>
                               <iframe
                                 src="//lightwidget.com/widgets/ae77f54407dc568d8a66ea671ab4446b.html"
                                 id="lightwidget-widget"
                                 className="w-full rounded-md"
                                 title='Tjonnas Instagram Embed'
                                 scrolling='no'
                               />
                           </div>
                           {/* NORVALD WIDGET */}
                           <div className='border rounded-md border-blue-100 shadow p-4'>
                            <iframe
                                src="//lightwidget.com/widgets/94ce69e33766541091adcf1f2b69c0b6.html"
                                id="lightwidget-widget"
                                className="w-full rounded-md"
                                title='Tjonnas Instagram Embed'
                                scrolling='no'
                            />
                           </div>
                           {/* NORMA WIDGET */}
                           <div className='border rounded-md border-red-100 shadow p-4'>
                            <iframe
                                src="//lightwidget.com/widgets/1554176b2dfb506f81404d88ec55e6df.html" 
                                id="lightwidget-widget"
                                className="w-full rounded-md"
                                title='Tjonnas Instagram Embed'
                                scrolling='no'
                            />
                           </div>
                   </section>
            </div>
        </div>


  )
}









