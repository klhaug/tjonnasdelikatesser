import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Text from '@/components/ui/Text';
import MenuClientWrapper from '@/components/ui/MenuClientWrapper';
import React from 'react'
import Contact from '@/components/sections/Contact';
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/live';


const TJONNAS_QUERY = defineQuery(`*[_type=="menu" && nameOfMenu =="tjonnasdelikatesser"] {
  _id,
  nameOfMenu,
  menuItems[] -> {
      _id,
       conditionalPrice,
         name,
      categoriTitle,
      description,
      housePick,
      price     
  },
}
`);
const CATERING_QUERY = defineQuery(`*[_type=="menu" && nameOfMenu =="catering"] {
  _id,
  nameOfMenu,
  menuItems[] -> {
      _id,
       conditionalPrice,
         name,
      categoriTitle,
      description,
      housePick,
      price     
  },
}
`);
const NORVALD_QUERY = defineQuery(`*[_type=="menu" && nameOfMenu =="norvald"] {
  _id,
  nameOfMenu,
  menuItems[] -> {
      _id,
       conditionalPrice,
         name,
      categoriTitle,
      description,
      housePick,
      price     
  },
}
`);

export default async function Page() {


  const getTjonnasMenu  = await sanityFetch({ query: TJONNAS_QUERY });
  const tjonnasMenu = getTjonnasMenu.data[0].menuItems

  const getCateringMenu = await sanityFetch({ query: CATERING_QUERY })
  const cateringMenu = getCateringMenu.data[0].menuItems

  const getNorvaldMenu = await sanityFetch({ query: NORVALD_QUERY })
  const norvaldMenu = getNorvaldMenu.data[0].menuItems


  return (
    <div>
      <Breadcrumbs breadcrumbs={[
          { label: 'Forsiden', href: '/' },
          {
            label: 'Menyer',
            href: '/menu',
            active: true,
          },
        ]} />
      <div className='p-4 flex mt-13 flex-col gap-4'>
        <Text variant='headline' content='Våre menyer' as='h2' />
        <Text variant='primary' content='Utforsk våre fristende menyer – velg mellom Tjønnås Delikatesser, Norvald og Catering i nedtrekksmenyen. Hver meny byr på nøye utvalgte retter laget med råvarer av høy kvalitet og lidenskap for god smak.' as='h2' />
      </div>
      <MenuClientWrapper tjonnasMenu = {tjonnasMenu} norvaldMenu = {norvaldMenu} cateringMenu = {cateringMenu} />
      <Contact />
    </div>
  )
}
