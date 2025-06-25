import React from 'react'
import TestimonialCard from '../ui/TestimonialCard'

export default function Testimonials() {
  return (
    <div className='py-14 flex bg-linear-150  justify-center from-[#FEFBF2] to-[#FFD5C3]'>
      <div className='grid grid-cols-1 px-6 md:px-12 lg:grid-cols-3 gap-8 max-w-[1440px]'>
        <div>
          <TestimonialCard />
        </div>
        <div className='hidden lg:block'>
          <TestimonialCard />
        </div>
        <div className='hidden lg:block'>
          <TestimonialCard />
        </div>
      </div>
    </div>
  )
}
