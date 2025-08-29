'use client'

import Image from 'next/image';
import React, { useRef, useState } from 'react'
import Link from 'next/link';

export default function MobileNav() {
  const [activeMenu, setActiveMenu] = useState(false);
  
  const scrollYRef = useRef(0);


  const showMenu = () => {
    if (typeof window !== "undefined") {
      scrollYRef.current = window.scrollY;
  
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
  
        requestAnimationFrame(() => {
          document.body.style.position = "fixed";
          document.body.style.top = "0";
          document.body.style.left = "0";
          document.body.style.right = "0";
          document.body.style.overflow = "hidden";
        });
      });
    }
  
    setActiveMenu(true);
  };
  
  const closeMenu = () => {
    setActiveMenu(false);
  
    setTimeout(() => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
  
      window.scrollTo(0, scrollYRef.current);
    }, 1); 
  };

    const handleOnclick = () => {
        if(activeMenu) {
            closeMenu();
        } else {
            showMenu();
        }
    }

    return (
      
      <div className="lg:hidden">
        { activeMenu ? <div className='fixed inset-0 z-40 bg-black opacity-50'></div> : null}
        {/* off-screen menu */}
        <div
          className={`${
            activeMenu ? "w-full" : "w-0"
          }  flex h-[6000px] items-start justify-center overflow-hidden bg-yellow-50 absolute top-0 right-0 z-[999]  duration-500`}
        >
          <nav className='text-nowrap h-[calc(100vh-83px)] flex flex-col justify-center '>
            <ul className='flex flex-col gap-8 relative'>
              <li>
                <Link onClick={handleOnclick} href="/" className='hover:underline underline-offset-2 font-medium text-xl'>Hjem</Link>
              </li>
              <li>
                <Link onClick={handleOnclick} href="/about/tjonnasdelikatesser" className='hover:underline underline-offset-2 text-xl font-medium'>Tjønnås delikatesser</Link>
              </li>
              <li>
                <Link onClick={handleOnclick} href="/about/norvald" className='hover:underline underline-offset-2 text-xl font-medium'>Norvald Kafe</Link>
              </li>
              <li>
                <Link onClick={handleOnclick} href="/about/norma" className='hover:underline underline-offset-2 text-xl font-medium'>Norma</Link>
              </li>
              <li>
                <Link onClick={handleOnclick} href="/products" className='hover:underline underline-offset-2 text-xl font-medium'>Produkter</Link>
              </li>
              <li>
                <Link onClick={handleOnclick} href="/menu" className='hover:underline underline-offset-2 text-xl font-medium'>Menyer</Link>
              </li>
              <li>
                <Link onClick={handleOnclick} href="/contact" className='hover:underline underline-offset-2 text-xl font-medium'>Kontakt</Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="w-full p-6 border-b bg-white border-grey-100 flex items-center justify-between">
          <Link href="/" className='h-fit'>
              <Image src="/images/Tjønnås_Ikon-oker.png" height={34} width={28} alt='icon'/> 
          </Link>
          <div
            onClick={handleOnclick}
            className={`${activeMenu && "active"} ham-menu active:bg-grey-100`}
            tabIndex={0}
          >
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </div>
        </nav>
      </div>
    );
  };
