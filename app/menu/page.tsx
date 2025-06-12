import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Text from '@/components/ui/Text';
import MenuClientWrapper from '@/components/ui/MenuClientWrapper';
import React from 'react'

const fakeTjonnasMenu = [
  {
    category: 'kaffe',
    items: [
      {
        name: "latte",
        price: "55,-"
      },
      {
        name: "cortado",
        price: "55,-"
      },
      {
        name: "espresso",
        price: "55,-"
      },
      {
        name: "filter kaffe",
        price: "55,-"
      },
    ]
  },
  {
    category: 'Varme drikker',
    items: [
      {
        name: "Chai latte",
        price: "60,-"
      },
      {
        name: "Dirty chai",
        price: "60,-"
      },
      {
        name: "Espresso",
        price: "55,-"
      },
      {
        name: "Filter Kaffe",
        price: "55,-"
      },
    ]
  },
  {
    category: "Mat (Toast)",
    items: [
      {
        name: "Ostetallerken",
        price: "pris p/vekt"
      },
      {
        name: "Spekefat",
        price: "pris p/vekt"
      },
      {
        name: "Toast med mozzarella og grønn pesto",
        price: "65,-/115,-"
      },
      {
        name: "Spekefat",
        price: "155,-"
      },
      {
        name: "Spekefat",
        price: "155,-"
      },
    ]
  },
 
]

const fakeNorvaldMenu = [
  {
    category: "red-wine",
    items: [
      {
        id: 1,
        name: "Meinkland Burgenland 2023",
        description: "Frisk og saftig, med preg av røde bær, grønne urter og litt krydder",
        price: "115,-/575,-",
        houseRedwine: true
      },
      {
        id: 2,
        name: "Fenocchia Barbera d'Alba Superioere 2022",
        description: "Frisk og saftig, med preg av røde bær, grønne urter og litt krydder",
        price: "115,-/575,-",
        houseRedwine: false
      },
      {
        id: 3,
        name: "Meinkland Burgenland 2023",
        description: "Frisk og saftig, med preg av røde bær, grønne urter og litt krydder",
        price: "115,-/575,-",
        houseRedwine: false
      },
    ]
  },
  {
    category: "white-wine",
    items: [
      {
        id: 1,
        name: "Meinkland Burgenland 2023",
        description: "Frisk og saftig, med preg av røde bær, grønne urter og litt krydder",
        price: "115,-/575,-",
        houseWhitewine: true
      },
      {
        id: 2,
        name: "Fenocchia Barbera d'Alba Superioere 2022",
        description: "Frisk og saftig, med preg av røde bær, grønne urter og litt krydder",
        price: "115,-/575,-",
        houseRedwine: false
      },
      {
        id: 3,
        name: "Meinkland Burgenland 2023",
        description: "Frisk og saftig, med preg av røde bær, grønne urter og litt krydder",
        price: "115,-/575,-",
        houseRedwine: false
      },
    ]
  },
]

export default async function Page() {

  async function getMenues(db): Promise<[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const allData = db;
      
        resolve(
          allData
        )
      }, 600)
    })
  }

    const tjonnasMenu = await getMenues(fakeTjonnasMenu)
    const norvaldMenu = await getMenues(fakeNorvaldMenu)

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
      <MenuClientWrapper tjonnasMenu = {tjonnasMenu} norvaldMenu = {norvaldMenu} />
    </div>
  )
}
