import Image from 'next/image'
import React from 'react'
import Text from './Text'

export default function TestimonialCard({image, quote}: {image: string, quote: string}) {
  return (
    <div className='bg-white rounded-lg flex flex-col items-center px-7 py-16 gap-4 h-[calc(100%-57.7px)] top-[57.5px] relative mb-[57.5px] max-w-[540px]'>
      <div className='h-[115px] w-[115px] absolute -top-[57.5px]'>
          <Image className='rounded-full h-full w-full object-cover object-top ' src={image} height={100} width={100} alt='headshot of testimonial person'/>
      </div>
      <div className='flex flex-col items-center gap-2'>
          <Text content='Fornøyd kunde' variant='headline' as='h2'/>
          <div className='flex gap-1'>
              <Image src="/icons/star.svg" height={20} width={20} alt='icon'/>
              <Image src="/icons/star.svg" height={20} width={20} alt='icon'/>
              <Image src="/icons/star.svg" height={20} width={20} alt='icon'/>
              <Image src="/icons/star.svg" height={20} width={20} alt='icon'/>
              <Image src="/icons/star.svg" height={20} width={20} alt='icon'/>
              <Image src="/icons/star.svg" height={20} width={20} alt='icon'/>
          </div>
      </div>
      <Image src="/icons/quote.svg" height={36} width={51} alt='headshot of testimonial person'/>
      <Text extraStyling='text-center' content={quote} variant='primary' as='p'/>
    </div>
  )
}
