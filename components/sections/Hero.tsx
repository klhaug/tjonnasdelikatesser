import Image from 'next/image'
import React from 'react'
import Text from '../ui/Text'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <div className='flex flex-col items-center gap-8 py-14 px-6'>
      <div className="flex flex-col gap-6">
          <div className="flex w-full justify-center">
              <Image src="/images/tjonaaslogohero.png"  height={200} width={200} alt="logo" />
          </div>
          <Text variant='primary' content='Delikatesser laget med lidenskap, lokale råvarer og respekt for tradisjon.' extraStyling='text-center' as='p' />
      </div>
      <div className='flex flex-col w-full gap-4 max-w-[576px]'>
          <Button text='Ta kontakt' variant='primary-fill' href='/contact' />
          <Button text='Les mer' variant='secondary-fill' href='/tjonnas-delikatesser' />
      </div>
      <Image className='rounded-lg' src="/images/241A9090.jpg" height={576} width={576} alt='woman smiling in cafe with food around her' />
    </div>
  )
}
