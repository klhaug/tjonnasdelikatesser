'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import Text from '../ui/Text'
import Link from 'next/link';

export default function MobileNav() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [instantHide, setInstantHide] = useState(true);
  
    const closeMenu = () => {
        setActiveMenu(false)
        document.body.style.overflowY = 'unset';
    }

    const showMenu = () => {
        setActiveMenu(true)
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }

    }

    const handleOnclick = () => {
        if(activeMenu) {
            closeMenu();
        } else {
            showMenu();
        }
    }

    return (
      <div className='sticky top-0'>
        {/* off-screen menu */}
        <div
          className={`${
            activeMenu ? "w-full" : "w-0"
          } h-screen flex items-center justify-center overflow-hidden bg-yellow-50 absolute top-0 right-0 z-[999]  duration-500`}
        >
          <nav className='text-nowrap '>
            <ul className='flex flex-col gap-8 relative top-'>
              <Link onClick={handleOnclick} href="/" className='hover:underline underline-offset-2'><Text variant='headline' content='Hjem' as='li' /></Link>
              <Link onClick={handleOnclick} href="/about/tjonnasdelikatesser" className='hover:underline underline-offset-2'><Text variant='headline' content='Tjønnås delikatesser' as='li' /></Link>
              <Link onClick={handleOnclick} href="/about/norvald" className='hover:underline underline-offset-2'><Text variant='headline' content='Norvald' as='li' /></Link>
              <Link onClick={handleOnclick} href="/about/norma" className='hover:underline underline-offset-2'><Text variant='headline' content='Norma' as='li' /></Link>
              <Link onClick={handleOnclick} href="/products" className='hover:underline underline-offset-2'><Text variant='headline' content='Produkter' as='li' /></Link>
              <Link onClick={handleOnclick} href="/menu" className='hover:underline underline-offset-2'><Text variant='headline' content='Menyer' as='li' /></Link>
              <Link onClick={handleOnclick} href="/contact" className='hover:underline underline-offset-2'><Text variant='headline' content='Kontakt oss' as='li' /></Link>
            </ul>
          </nav>
        </div>
        <nav className="w-full p-6 border-b sticky top-0 border-grey-100 flex items-center justify-between">
          <Link href="/" className='h-fit'>
              <Image src="/images/Tjønnås_Ikon-oker.png" height={34} width={28} alt='icon'/> 
          </Link>
          <div
            onClick={handleOnclick}
            className={`${activeMenu && "active"} ham-menu active:bg-grey-100`}
          >
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </div>
        </nav>
      </div>
    );
  };
