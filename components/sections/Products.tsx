import React from 'react'
import Carousel from '../ui/Carousel'
import Text from '../ui/Text'
import Link from 'next/link'



export default function Products() {
  return (
    <div className='bg-linear-120 from-yellow-100 to-red-100 flex flex-col justify-center items-center relative gap-4 py-14'>
        <div className='flex flex-col max-w-[576px] px-6 w-full'>
            <Text variant='subheadline' extraStyling="text-red-500" content='Tjønnås anbefaler' as='p' />
            <div className='flex justify-between w-full items-end'>
                <Text variant='headline' content='Smaker du må prøve' as='h3' />
                <Link className='hover:cursor-pointer hover:underline text-red-500 underline-offset-2 z-50'  href="/" ><Text content='Se alle' variant='primaryBold' as='p' /></Link>
            </div>
        </div>
        <div className='w-1/2 opacity-15 right-0 top-0 rounded-tl-full z-1 absolute h-full bg-red-300'></div>
                <div className='w-full md:hidden'>
                    <Carousel />
                </div>
    </div>
  )
}
