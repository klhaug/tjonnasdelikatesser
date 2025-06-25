import React from 'react'
import Button from './Button'
import Text from './Text'
import Image from 'next/image'

type Props = {
    name: string | null,
    lead: string | null,
    price: number | null,
    slug: string | null,
    imageUrl: string | null,
    imageAlt: string | null,


   }

export default function VerticalCard({imageUrl, name, price, lead, slug, imageAlt}: Props): React.JSX.Element {
        

                return(
                    <article className='rounded-lg z-900 min-w-[275px]  bg-white h-full flex flex-col border-hidden w-full max-w-[600px]'>
                            {imageUrl ? (
                                <Image className='object-center rounded-t-lg h-[250px] object-cover' src={imageUrl} height={600} width={600} alt={imageAlt ?? "food"} />
                                ): null}
                        <section className='flex flex-col justify-between h-full gap-2 p-6'>
                        <div className='flex flex-col gap-2'>
                            {name ? (
                                <Text variant='primaryBold' content={name} as='h3' />
                                ): null}
                            {price ? (
                                <Text variant='primaryBold' extraStyling='' content={`${price},-`} as='p' />
                                ): null}
                            {lead ? (
                                <Text variant='primarySmall' content={lead} extraStyling='h-21 overflow-hidden' as='p' />
                                ): null}
                        </div>
                        {slug ? (
                            <Button text='Les mer' color='text-red-500' variant='tertiary-fill' href={`/products/${slug}`} />
                            ): null}
                        </section>
                    </article>
                )
            }
