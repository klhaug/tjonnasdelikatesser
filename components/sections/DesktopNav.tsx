import Link from 'next/link'
import Image from "next/image";
import React from 'react'
import Button from '../ui/Button';

export default function DesktopNav() {
  return (
    <div className='hidden lg:block border-b border-b-grey-100 w-full'>
       <nav className='text-nowrap m-auto relative flex justify-between items-center max-w-[1440px] md:px-12 lg:px-22 py-12 '>
         <Link href="/">
                <Image src="/images/Tjønnås_Ikon-oker.png" className='h-[44px] w-[35px]' height={34} width={28} alt='icon'/>
            </Link>
              <ul className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 lg:gap-12 flex items-start justify-self-center  justify-between'>
                <li>
                  <Link href="/about/tjonnasdelikatesser" className='hover:underline underline-offset-2'>Tjønnås Delikatesser</Link>
                </li>
                <li>
                  <Link href="/about/norvald" className='hover:underline underline-offset-2'>Norvald</Link>
                </li>
                <li>
                  <Link href="/about/norma" className='hover:underline underline-offset-2'>Norma</Link>
                </li>
                <li>  
                  <Link href="/products" className='hover:underline underline-offset-2'>Produkter</Link>
                </li>
                <li>
                  <Link href="/menu" className='hover:underline underline-offset-2'>Menyer</Link>
                </li>
              </ul>
              <Button text={'Ta kontakt'} variant={'primary-fill'} href={'/contact'} />
          </nav>
    </div>
  )
}
