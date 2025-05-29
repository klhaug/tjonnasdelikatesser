import Image from 'next/image'
import React from 'react'
import Text from './Text'

export default function TestimonialCard() {
  return (
    <div className='bg-white rounded-lg flex flex-col items-center px-7 py-16 gap-4 top-[57.5px] relative mb-[57.5px] max-w-[540px]'>
      <div className='h-[115px] w-[115px] absolute -top-[57.5px]'>
          <Image className='rounded-full h-full w-full object-cover object-top ' src="/images/241A9250.jpg" height={100} width={100} alt='headshot of testimonial person'/>
      </div>
      <div className='flex flex-col items-center gap-2'>
          <Text content='Fornøyd kunde' variant='headline' as='h2'/>
          <div className='flex gap-1'>
              <Image src="/icons/star.svg" height={20} width={20} alt='headshot of testimonial person'/>
              <Image src="/icons/star.svg" height={20} width={20} alt='headshot of testimonial person'/>
              <Image src="/icons/star.svg" height={20} width={20} alt='headshot of testimonial person'/>
              <Image src="/icons/star.svg" height={20} width={20} alt='headshot of testimonial person'/>
              <Image src="/icons/star.svg" height={20} width={20} alt='headshot of testimonial person'/>
              <Image src="/icons/star.svg" height={20} width={20} alt='headshot of testimonial person'/>
          </div>
      </div>
      <Image src="/icons/quote.svg" height={36} width={51} alt='headshot of testimonial person'/>
      <Text extraStyling='text-center' content='"Jeg har handlet fra Tjønnås i flere år, og kvaliteten skuffer aldri. Råvarene er alltid ferske, smaken er fantastisk, og servicen er personlig og varm. Tjønnås er førstevalget mitt hver gang!"' variant='primary' as='p'/>
    </div>
  )
}
