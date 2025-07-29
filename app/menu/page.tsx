import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Text from '@/components/ui/Text';
import MenuClientWrapper from '@/components/ui/MenuClientWrapper';
import React from 'react'
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/live';
import { Metadata } from 'next';


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

export const metadata: Metadata = {
  title: 'Meny - Tjønnås Delikatesser',
  description: 'En side med de ulike menyene på våre ulike konsepter.',
}


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

      <div className='p-8 flex max-w-[1440px] m-auto lg:px-22 flex-col gap-4'>
        <Text variant='headline' content='Våre menyer' as='h2' />
        <Text variant='primary' content='Utforsk våre fristende menyer – velg mellom Tjønnås Delikatesser, Norvald og Catering i nedtrekksmenyen. Hver meny byr på nøye utvalgte retter laget med råvarer av høy kvalitet og lidenskap for god smak.' as='h2' />
      </div>
      <MenuClientWrapper tjonnasMenu = {tjonnasMenu} norvaldMenu = {norvaldMenu} cateringMenu = {cateringMenu} />
    </div>
  )
}
