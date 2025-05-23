import React from 'react'
import VerticalCard from '../ui/VerticalCard'
import Text from '../ui/Text'
import Link from 'next/link'

type Food = {
    name: string
    price: string
    description: string
    imageUrl: string
    productId: number
}

const fakeFoodDataBase: Food[] = [
    {
        productId: 1,
        name: "Tortillalefser",
        price: "199,-",
        description: "Myke og smidige lefser som passer perfekt til taco, wraps og burritos. Enkle å rulle, gode å spise.",
        imageUrl: "/images/241A8964.jpg"
    },
    {
        productId: 2,
        name: "Tortillalefser",
        price: "199,-",
        description: "Myke og smidige lefser som passer perfekt til taco, wraps og burritos. Enkle å rulle, gode å spise.",
        imageUrl: "/images/241A8964.jpg"
    },
    {
        productId: 3,
        name: "Tortillalefser",
        price: "199,-",
        description: "Myke og smidige lefser som passer perfekt til taco, wraps og burritos. Enkle å rulle, gode å spise.",
        imageUrl: "/images/241A9129.jpg"
    },
]

export default function Products() {
    console.log(fakeFoodDataBase)
  return (
    <div className='bg-linear-120 from-yellow-100 to-red-100 flex flex-col relative gap-4 items-start px-6 py-14'>
        <div className='flex flex-col w-full'>
            <Text variant='subheadline' extraStyling="text-red-500" content='Tjønnås anbefaler' as='p' />
            <div className='flex justify-between w-full items-end'>
                <Text variant='headline' content='Smaker du må prøve' as='h3' />
                <Link className='hover:cursor-pointer hover:underline text-red-500 underline-offset-2 z-50'  href="/" ><Text content='Se alle' variant='primaryBold' as='p' /></Link>
            </div>
        </div>
        <div className='w-1/2 opacity-15 right-0 top-0 rounded-tl-full z-10 absolute h-full bg-red-300'></div>
        <div className="flex  overflow-hidden justify- gap-8">
            {fakeFoodDataBase.map((product) => {
                const {name, description, price, imageUrl, productId} = product;
                return (
                    <VerticalCard key={productId} name={name} description={description} price={price} imageUrl={imageUrl} />
                )
            })}
        </div>
    </div>
  )
}
