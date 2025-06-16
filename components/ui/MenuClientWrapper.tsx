'use client'

import React, { useState } from 'react'
import MenuSelectDropdown from '@/components/ui/MenuSelectDropdown';
import MenuComponent from '@/components/ui/MenuComponent';
import { usePathname, useSearchParams } from 'next/navigation';


type Tjonnas = {
    _id: string;
    conditionalPrice: string | null;
    name: string | null;
    categoriTitle: string | null;
    description: string | null;
    housePick: boolean | null;
    price: string | null;
}[] | null


type Norvald = {
    _id: string;
    conditionalPrice: string | null;
    name: string | null;
    categoriTitle: string | null;
    description: string | null;
    housePick: boolean | null;
    price: string | null;
}[] | null


type Catering = {
    _id: string;
    conditionalPrice: string | null;
    name: string | null;
    categoriTitle: string | null;
    description: string | null;

    housePick: boolean | null;
    price: string | null;
}[] | null






export default function MenuClientWrapper({tjonnasMenu, norvaldMenu, cateringMenu}: {tjonnasMenu: Tjonnas, norvaldMenu: Norvald, cateringMenu: Catering}) {

    const [selectedMenu, setSelectedMenu] = useState<"tjonnasdelikatesser"|"norvald"|"catering">("tjonnasdelikatesser")
    const [isHydrated, setIsHydrated] = useState(false);

    const searchParams = useSearchParams();
    const pathname = usePathname();

    const menuUrlUpdate = (input: string) => {
      const params = new URLSearchParams(searchParams);
      if (input) {
        params.set('menu', input);
      } else {
        params.delete('menu');
      }
      console.log("REPLACING URL", `${pathname}?${params.toString()}`);
      window.history.pushState(null, '', `${pathname}?${params.toString()}`);
    };

    if(!isHydrated){
      const params = new URLSearchParams(searchParams)
      if(params.has("menu")) {
        const menu = params.get("menu");
        if(menu === "tjonnasdelikatesser" || menu === "norvald" || menu === "catering") {
          setSelectedMenu(menu)
          setIsHydrated(true)
        }
      }
    }

  

    

    console.log(selectedMenu)

    const updateSelectedMenu = (input: "tjonnasdelikatesser" | "norvald" | "catering") => {
      console.log(input)
      menuUrlUpdate(input)
      setSelectedMenu(input)
    }

  return (
    <div className=''>
      <div className="px-4">
        <MenuSelectDropdown selectedMenu={selectedMenu} setSelectedMenu={updateSelectedMenu} />
      </div>
      <MenuComponent selectedMenu={selectedMenu} tjonnasMenu={tjonnasMenu} norvaldMenu={norvaldMenu} cateringMenu={cateringMenu}/>
    </div>
  )
}
