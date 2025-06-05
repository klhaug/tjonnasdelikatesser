import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Text from './Text'

type Props = {
  name: string
  price: number
  description: string
  imgUrl: string
  category: string
  inStock: boolean
}
  

export default function HorisontalProductCard({name, price, description, imgUrl, category, inStock}: Props) {
  return (
    <Link href={`/products/${name}`} className=' shadow-md max-h-[200px] hover:cursor-pointer rounded-md flex gap-2 hover:shadow-lg active:scale-95'>
      <Image src={imgUrl} className='w-1/2 rounded-l-lg object-cover' height={500} width={500} alt={name} />
      <div className="flex flex-col p-6 gap-2">
        <Text content={name} variant='primaryBold' as='h2' />
        <Text content={description} variant='primarySmall' as='p' />
        <Text content={`${price.toString()},-`} variant='primaryBold' as='p' />
      </div>
    </Link>
  )
}
