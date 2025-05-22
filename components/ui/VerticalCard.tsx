import React from 'react'
import Button from './Button'
import Text from './Text'
import Image from 'next/image'

type Food = {
    name: string
    price: string
    description: string
    imageUrl: string
}

const fakeFoodDataBase: Food[] = [
    {
        name: "Tortillalefser",
        price: "199,-",
        description: "Myke og smidige lefser som passer perfekt til taco, wraps og burritos. Enkle å rulle, gode å spise.",
        imageUrl: "/images/241A8964.jpg"
    }
]


export default function VerticalCard() {
    const {name, price, description, imageUrl} = fakeFoodDataBase;

  return (
    <article>
        <Image src={imageUrl} height={300} width={300} alt='food' />
        <Text variant='primary' content={name} as='h3' />
        <Text variant='primary' content={price} as='p' />
        <Text variant='primarySmall' content={description} as='p' />
        <Button text='Les mer' variant='tertiary-fill' href='/' />
    </article>
  )
}
