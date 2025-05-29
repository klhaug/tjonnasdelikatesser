'use client'

import React, { useState, MouseEvent } from 'react'
import SoMeCard from '../ui/SoMeCard'
import Text from '../ui/Text'

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
        <div className='flex items-center justify-center'>
            <div className='px-6 py-14 flex flex-col gap-4 items-start'>
                <div className='flex flex-col gap-2'>
                    <Text content='Små øyeblikk' variant='subheadline' as='h3' />
                    <Text content='Se hva som skjer' variant='headline' as='h2' />
                </div>
                <div className='flex gap-4'>
                    <button onClick={handleOnclick} value="tjonnas" className={`${currentCafe === "tjonnas" ? "bg-yellow-300" : "bg-white"} px-2 border border-yellow-300 rounded-md hover:cursor-pointer`}>Tjønnås</button>
                    <button onClick={handleOnclick} value="norvald" className={`${currentCafe === "norvald" ? "bg-blue-300" : "bg-white"} px-2 border border-blue-300 rounded-md hover:cursor-pointer`}>Norvald</button>
                    <button onClick={handleOnclick} value="norma" className={`${currentCafe === "norma" ? "bg-red-300" : "bg-white"} px-2 border border-red-300 rounded-md hover:cursor-pointer`}>Norma</button>
                </div>
                {currentCafe === "tjonnas" ?
                    <SoMeCard
                        id={fakeSomeDatabase[0].id}
                        account={fakeSomeDatabase[0].account}
                        date={fakeSomeDatabase[0].date}
                        post={fakeSomeDatabase[0].post}
                        imageUrl={fakeSomeDatabase[0].imageUrl}
                        />
                    : null}
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
