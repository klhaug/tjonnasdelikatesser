import React from 'react'

import TjonnasMenu from '@/components/ui/TjonnasMenu';
import NorvaldMenu from '@/components/ui/NorvaldMenu';
import CateringMenu from '@/components/ui/CateringMenu';


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



export default function MenuComponent({selectedMenu, tjonnasMenu, norvaldMenu, cateringMenu}: {selectedMenu: string, tjonnasMenu: Tjonnas, norvaldMenu: Norvald, cateringMenu: Catering}) {
  return (
    <div>
    { selectedMenu === "tjonnasdelikatesser" ? <TjonnasMenu tjonnasMenu = {tjonnasMenu} /> : null}
    { selectedMenu === "norvald" ? <NorvaldMenu norvaldMenu = {norvaldMenu} /> : null}
    { selectedMenu === "catering" ? <CateringMenu cateringMenu ={cateringMenu} /> : null}
    </div>
  )
}
