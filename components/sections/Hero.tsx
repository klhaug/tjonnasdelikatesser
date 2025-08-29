import Image from 'next/image'
import React from 'react'
import Text from '../ui/Text'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row justify-start lg:hidden items-center gap-8 py-14 md:py-18 md:px-12 px-6'>
      <div className='flex flex-col w-full gap-4 items-center md:max-w-1/2'>
        <div className="flex w-full flex-col gap-6">
            <div className="flex w-full justify-center">
                <Image src="/images/tjonaaslogohero.png"  height={40} width={200} alt="logo" />
            </div>
            <Text variant='primary' content='Mat, hygge og kvalitet i sentrum' extraStyling='text-center' as='p' />
        </div>
        <div className='flex flex-col w-full gap-4 max-w-[576px]'>
            <Button text='Ta kontakt' variant='primary-fill' href='/contact' />
            <Button text='Les mer' variant='secondary-fill' href='/about/tjonnasdelikatesser' />
        </div>
      </div>
      <div className="max-w-[768px]">
        <Image priority={true} placeholder="blur" blurDataURL="/images/HeroImgMobileBlur.webp" className='rounded-lg' src="/images/HeroImgMobile.webp" height={700} width={579} alt='woman smiling in cafe with food around her' />
      </div>
    </div>
  )
}
