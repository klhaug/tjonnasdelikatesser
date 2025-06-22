import Link from 'next/link'
import Image from "next/image";
import React from 'react'
import Button from '../ui/Button';

export default function DesktopNav() {
  return (
    <div className='hidden md:block'>
       <nav className='text-nowrap flex items-center justify-between border-b border-b-grey-100 px-8 py-12 '>
         <Link href="/">
                <Image src="/images/Tjønnås_Ikon-oker.png" className='h-[44px] w-full' height={34} width={28} alt='icon'/>
            </Link>
            <div className='w-full flex items-center justify-center'>
              <ul className='flex items-center justify-center gap-12 relative'>
                <li>
                  <Link href="/about/tjonnasdelikatesser" className='hover:underline underline-offset-2'>Tjønnås Delikatesser</Link>
                </li>
                <li>
                  <Link href="/about/norvald" className='hover:underline underline-offset-2'>Norma</Link>
                </li>
                <li>
                  <Link href="/about/norma" className='hover:underline underline-offset-2'>Norvald</Link>
                </li>
                <li>
                  <Link href="/products" className='hover:underline underline-offset-2'>Produkter</Link>
                </li>
                <li>
                  <Link href="/menu" className='hover:underline underline-offset-2'>Menyer</Link>
                </li>
                <li>
                  <Link href="/contact" className='hover:underline underline-offset-2'></Link>
                </li>
              </ul>
            </div>
              <Button text={'Ta kontakt'} variant={'primary-fill'} href={'/contact'} />
          </nav>
    </div>
  )
}
