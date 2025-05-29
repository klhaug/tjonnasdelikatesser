'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import Text from '../ui/Text'
import Link from 'next/link';

export default function MobileNav() {

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

    const [activeMenu, setActiveMenu] = useState(false);
    return (
      <div>
        {/* off-screen menu */}
        <div
          className={`${
            activeMenu ? "right-0" : "-right-[800px]"
          } h-screen w-full max-w-[800px] flex items-center justify-center bg-yellow-50 z-[999] absolute top-0 duration-500`}
        >
          <ul className='flex flex-col gap-8 relative top-'>
            <Link href="/" className='hover:underline underline-offset-2'><Text variant='headline' content='Hjem' as='li' /></Link>
            <Link href="/" className='hover:underline underline-offset-2'><Text variant='headline' content='Tjønnås delikatesser' as='li' /></Link>
            <Link href="/" className='hover:underline underline-offset-2'><Text variant='headline' content='Norvald' as='li' /></Link>
            <Link href="/" className='hover:underline underline-offset-2'><Text variant='headline' content='Norma' as='li' /></Link>
            <Link href="/" className='hover:underline underline-offset-2'><Text variant='headline' content='Produkter' as='li' /></Link>
            <Link href="/" className='hover:underline underline-offset-2'><Text variant='headline' content='Menyer' as='li' /></Link>
            <Link href="/" className='hover:underline underline-offset-2'><Text variant='headline' content='Kontakt oss' as='li' /></Link>
          </ul>
        </div>
        <nav className="w-full p-6 border-b border-grey-100 flex items-center justify-between">
          <div className='h-fit'>
              <Image src="/images/Tjønnås_Ikon-oker.png" height={34} width={28} alt='icon'/> 
          </div>
          <div
            onClick={handleOnclick}
            className={`${activeMenu && "active"} ham-menu`}
          >
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </div>
        </nav>
      </div>
    );
  };
