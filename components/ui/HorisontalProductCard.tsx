import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Text from './Text'
import Tag from './Tag'

type Props = {
  name: string
  price: number
  description: string
  imgUrl: string
  category: string
  inStock: boolean
}
  

export default function HorisontalProductCard({name, price, description, imgUrl, category, slug, inStock, alt}: Props) {
  return (
    <Link href={`/products/${slug || null}`} className='shadow-md h-full hover:cursor-pointer rounded-md flex gap-2 hover:shadow-lg active:scale-95'>
      <Image src={imgUrl || "https://placehold.co/550x310/png" }  className='max-w-2/5 max-h-[300px] rounded-l-lg object-cover' height={500} width={500} alt={alt || "Food"} />
      <div className="flex flex-col p-6 gap-2">
        {category ? (
          <Tag variant='tjonnasdelikatesser' content={category} textStyle='captionLabel' />
        ) : null}
        {name ? (
          <Text content={name} variant='primaryBold' as='h2' />
          ) : null}
        {description ? (
          <Text content={description} variant='primarySmall' as='p' />
        ) : null}
        {price ? (
          <Text content={`${price.toString()},-`} variant='primaryBold' as='p' />
      ): null}
        {inStock ? (
          <Text content={inStock ? "På lager":"Ikke på lager "} extraStyling={`mt-auto w-fit font-semibold rounded-sm ${inStock ? "text-green-500" : "text-red-500"}`} variant='captionLabel' as='p' />
      ): null}
      </div>
    </Link>
  )
}
