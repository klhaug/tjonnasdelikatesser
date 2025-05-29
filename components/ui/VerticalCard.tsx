import React from 'react'
import Button from './Button'
import Text from './Text'
import Image from 'next/image'

type Card = {
    imageUrl: string
    name: string
    price: string
    description: string
}

export default function VerticalCard({imageUrl, name, price, description}: Card): React.JSX.Element {
                return(
                    <article className='rounded-lg z-900 min-w-[275px] bg-white h flex flex-col border-hidden w-full max-w-[500px]'>
                        <Image className='object-center rounded-t-lg h-[200px] object-cover' src={imageUrl} height={500} width={500} alt='food' />
                        <section className='flex flex-col gap-2 p-6'>
                            <Text variant='primaryBold' content={name} as='h3' />
                            <Text variant='primaryBold' content={price} as='p' />
                            <Text variant='primarySmall' content={description} as='p' />
                            <Button text='Les mer' color='text-red-500' variant='tertiary-fill' href='/' />
                        </section>
                    </article>
                )
            }
