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


const fakeSomeDatabase: FakeSomeDatabase[] = [
    {
        id: "tjonnas",
        account: "Tjønnås Delikatesser",
        date: "25.04.2025",
        post: "Dagens middag: hjemmelaget mexicansk inspirert rett – en balansert kombinasjon av krydder, farger og friske råvarer 🌮 #MexicanskMat #Smakfullt #Hjemmelaget",
        imageUrl: "/images/241A9372.jpg"
    },
    {
        id: "norma",
        account: "Norma",
        date: "22.04.2025",
        post: "Dagens middag: klassisk italiensk pasta med en frisk tomatsaus – perfekt balanse mellom syrlighet og fylde 🍝 #ItalienskMat #Smakfullt #Hjemmelaget",
        imageUrl: "/images/241A9411-1.jpg"
    },
    {
        id: "norvald",
        account: "Norvald",
        date: "28.05.2025",
        post: "Dagens middag: ovnsbakt laks med grønnsaker og urter – en sunn og fargerik middag som smaker av sommer 🌿 #FiskTilMiddag #SuntOgGodt #Hjemmelaget",
        imageUrl: "/images/241A9491-1.jpg"
    },
]

export default function SoMe() {
const [currentCafe, setCurrentCafe] = useState("tjonnas")


const handleOnclick = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentCafe(event.currentTarget.value)
    console.log(currentCafe)
}




  
    return (
        <div className='flex flex-col items-center max-w[-768px] justify-center md:py-18'>
            <Script src='https://cdn.lightwidget.com/widgets/lightwidget.js'/>
            <div className='px-6 py-14 w-full max-w-[540px] flex flex-col md:flex-row md:max-w-[1440px] gap-4 md:gap-8 md:px-12 items-start md:items-center'>
                <div className='flex flex-col  md:w-1/2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <Text content='Små øyeblikk' variant='subheadline' as='h3' />
                        <Text content='Se hva som skjer' variant='headline' as='h2' />
                    </div>
                    <div className='flex md:flex-col gap-4'>
                        <button onClick={handleOnclick} value="tjonnas" className={`${currentCafe === "tjonnas" ? "bg-yellow-300" : "bg-white"} px-2 border border-yellow-300 rounded-md hover:cursor-pointer md:h-[54px]`}>Tjønnås</button>
                        <button onClick={handleOnclick} value="norvald" className={`${currentCafe === "norvald" ? "bg-blue-300" : "bg-white"} px-2 border border-blue-300 rounded-md hover:cursor-pointer md:h-[54px]`}>Norvald</button>
                        <button onClick={handleOnclick} value="norma" className={`${currentCafe === "norma" ? "bg-red-300" : "bg-white"} px-2 border border-red-300 rounded-md hover:cursor-pointer md:h-[54px]`}>Norma</button>
                    </div>
                </div>
                {currentCafe === "tjonnas" ?
                   <div className='w-full md:w-1/2 max-w-[540px]'>
                    <div className='flex py-4 gap-4 '>
                <div className='h-[44px] w-[44px] rounded-full'>
                    <Image src="/images/241A9090 2.png" className='object-none rounded-full object-[36%_36%]' height={100} width={100} alt='profile-pic' />
                </div>
                    <div className='flex justify-between w-full'>
                        <div className='flex items-start justify-center flex-col'>
                            <Text content="Tjønnås Delikatesser" variant='primary'  as='p' />
                            <Text content="@tjonnasdelikatesser" variant='primarySmall'  as='p' />
                        </div>
                        <Image src="/icons/instagramsd 1.svg" width={33} height={33} alt='icon' />
                    </div>
                </div>
                   <div className='md:min-h-[450px]'>
                       <iframe
                         src="//lightwidget.com/widgets/c3ad9979c86054c39b1754e0cf98a43a.html"
                         id="lightwidget-widget"
                         className="w-full rounded-md"
                         title='Tjonnas Instagram Embed'
                         scrolling='no'
                       />
                   </div>
                 </div> : null }
                {currentCafe === "norvald" ?
                    <SoMeCard
                        id={fakeSomeDatabase[2].id}
                        account={fakeSomeDatabase[2].account}
                        date={fakeSomeDatabase[2].date}
                        post={fakeSomeDatabase[2].post}
                        imageUrl={fakeSomeDatabase[2].imageUrl}
                        />
                    : null}
                {currentCafe === "norma" ?
                    <SoMeCard
                        id={fakeSomeDatabase[1].id}
                        account={fakeSomeDatabase[1].account}
                        date={fakeSomeDatabase[1].date}
                        post={fakeSomeDatabase[1].post}
                        imageUrl={fakeSomeDatabase[1].imageUrl}
                        />
                    : null}
            </div>
        </div>
  )
}
