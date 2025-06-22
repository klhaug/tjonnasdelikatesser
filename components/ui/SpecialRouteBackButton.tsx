'use client'

import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function SpecialRouteBackButton() {
    const router = useRouter();
  return (
    <div>
       <button
              onClick={() => router.back()}
              className='text-base h-[44px] bg-yellow-300 flex justify-center items-center text-nowrap w-full transition-all hover:bg-yellow-350 hover:cursor-pointer gap-2 group rounded-lg pl-6 pr-6'>
                <Image
                  src='/icons/arrow.svg'
                  className='group-hover:-translate-x-1 transition-all rotate-180'
                  alt='icon'
                  height={16}
                  width={16}
                  />
                    Tilbake
              </button>
    </div>
  )
}
