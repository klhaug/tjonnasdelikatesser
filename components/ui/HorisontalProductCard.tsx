import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Text from './Text'
import Tag from './Tag'

type Props = {
  name: string | undefined
  price: number | undefined
  description: string | undefined
  imgUrl: string | undefined | null
  category: string | undefined
  inStock: boolean | undefined
  slug: string | undefined
  alt: string | undefined
}
  

export default function HorisontalProductCard({name, price, description, imgUrl, category, slug, inStock, alt}: Props) {
  return (
    <Link href={`/products/${slug || null}`} className='shadow-md h-full max-h-[850px] lg:max-h-[250px] hover:cursor-pointer rounded-md flex hover:shadow-lg active:scale-95'>
      <div className='w-1/3'>
        <Image src={imgUrl || "https://placehold.co/550x310/png" }  className='w-full h-full rounded-l-lg object-cover' height={500} width={500} alt={alt || "Food"} />
      </div>
      <div className="flex w-2/3 flex-col p-6 gap-2">
        {category ? (
          <Tag variant='tjonnasdelikatesser' content={category} textStyle='captionLabel' />
        ) : null}
        {name ? (
          <Text content={name} variant='primaryBold' as='h2' />
          ) : null}
        {description ? (
          <div className='h-full '>
            <Text content={description} variant='primarySmall' extraStyling='' as='p' />
          </div>
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
