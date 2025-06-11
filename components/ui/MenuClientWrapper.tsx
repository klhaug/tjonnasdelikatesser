'use client'

import React, { useEffect, useState } from 'react'
import MenuSelectDropdown from '@/components/ui/MenuSelectDropdown';
import MenuComponent from '@/components/ui/MenuComponent';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function MenuClientWrapper({tjonnasMenu}) {
    const [selectedMenu, setSelectedMenu] = useState("tjonnasdelikatesser")

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const menuUrlUpdate = (input: string) => {
      const params = new URLSearchParams(searchParams);
      if (input) {
        params.set('menu', input);
      } else {
        params.delete('menu');

      }
      console.log("REPLACING URL", `${pathname}?${params.toString()}`);
      replace(`${pathname}?${params.toString()}`);
    };

    useEffect(() => {
      menuUrlUpdate(selectedMenu)
    }, [selectedMenu])
  

    

    console.log(selectedMenu)

    const updateSelectedMenu = (input: string) => {
      console.log(input)
      setSelectedMenu(input)
    }

  return (
    <div className='p-4'>
      <MenuSelectDropdown selectedMenu={selectedMenu} setSelectedMenu={updateSelectedMenu} />
      <MenuComponent selectedMenu={selectedMenu} tjonnasMenu = {tjonnasMenu} />
    </div>
  )
}
