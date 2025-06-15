import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Text from './Text'
import Tag from './Tag'
import { PortableText } from 'next-sanity'

type Props = {
  name: string
  price: number
  description: string
  imgUrl?: string | null
  category: string
  inStock: boolean
}
  

export default function HorisontalProductCard({name, price, description, imgUrl, category, inStock}: Props) {
  return (
    <Link href={`/products/${name}`} className=' shadow-md h-full hover:cursor-pointer rounded-md flex gap-2 hover:shadow-lg active:scale-95'>
      <Image src={imgUrl} className='w-2/5 rounded-l-lg object-cover' height={500} width={500} alt={name} />
      <div className="flex flex-col p-6 gap-2">
        <Tag variant='tjonnasdelikatesser' content={category} textStyle='captionLabel' />
        <Text content={name} variant='primaryBold' as='h2' />
        <PortableText value={description} />
        {/* <Text content={description} variant='primarySmall' as='p' /> */}
        <Text content={`${price.toString()},-`} variant='primaryBold' as='p' />
        <Text content={inStock ? "På lager":"Ikke på lager "} extraStyling={`mt-auto w-fit font-semibold rounded-sm ${inStock ? "text-green-500" : "text-red-500"}`} variant='captionLabel' as='p' />
      </div>
    </Link>
  )
}
