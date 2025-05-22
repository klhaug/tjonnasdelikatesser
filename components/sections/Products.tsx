import React from 'react'
import VerticalCard from '../ui/VerticalCard'

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
    <div className='bg-linear-120 from-yellow-100 to-red-100 flex flex-row overflow-hidden relative items-center gap-8 px-6 py-14'>
        <div className='w-1/2 opacity-15 right-0 top-0 rounded-tl-full z-10 absolute h-full bg-red-300'></div>

        {fakeFoodDataBase.map((product) => {
            const {name, description, price, imageUrl, productId} = product;
            return (
                <VerticalCard key={productId} name={name} description={description} price={price} imageUrl={imageUrl} />
            )
        })}
    </div>
  )
}
