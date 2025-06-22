import React from 'react'
import Button from './Button'
import Text from './Text'
import Image from 'next/image'

type Card = {
    imageUrl: string | null
    name: string | null
    price: number | null
    description: string | null
    slug: string | null
    imageAlt: string | null
}

export default function VerticalCard({imageUrl, name, price, description, slug, imageAlt}: Card): React.JSX.Element {
                return(
                    <article className='rounded-lg z-900 min-w-[275px] h-[475px] bg-white h flex flex-col border-hidden w-full max-w-[500px]'>
                            {imageUrl ? (
                                <Image className='object-center rounded-t-lg h-[250px] object-cover' src={imageUrl} height={500} width={500} alt={imageAlt ?? "food"} />
                                ): null}
                        <section className='flex flex-col h-full gap-2 p-6'>
                        {name ? (
                            <Text variant='primaryBold' content={name} as='h3' />
                            ): null}
                        {price ? (
                            <Text variant='primaryBold' extraStyling='' content={`${price},-`} as='p' />
                            ): null}
                        {description ? (
                            <Text variant='primarySmall' content={description} as='p' />
                            ): null}
                        {slug ? (
                            <Button text='Les mer' color='text-red-500' variant='tertiary-fill' href={`/products/${slug}`} />
                            ): null}
                        </section>
                    </article>
                )
            }
