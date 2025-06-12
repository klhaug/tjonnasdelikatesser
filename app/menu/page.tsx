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
        isHouseWine: true
      },
      {
        id: 2,
        name: "Fenocchia Barbera d'Alba Superioere 2022",
        description: "Frisk og saftig, med preg av røde bær, grønne urter og litt krydder",
        price: "115,-/575,-",
        isHouseWine: false
      },
      {
        id: 3,
        name: "Meinkland Burgenland 2023",
        description: "Frisk og saftig, med preg av røde bær, grønne urter og litt krydder",
        price: "115,-/575,-",
        isHouseWine: false
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
        isHouseWine: true
      },
      {
        id: 2,
        name: "Fenocchia Barbera d'Alba Superioere 2022",
        description: "Frisk og saftig, med preg av røde bær, grønne urter og litt krydder",
        price: "115,-/575,-",
        isHouseWine: false
      },
      {
        id: 3,
        name: "Meinkland Burgenland 2023",
        description: "Frisk og saftig, med preg av røde bær, grønne urter og litt krydder",
        price: "115,-/575,-",
        isHouseWine: false
      },
    ]
  },
]

const fakeCateringMenu = [
  {
    category: "Fingermat",
    items: [
      {
        id: 1,
        description: "Brie, manchego/comte, italiensk salami, oliven, frukt, grissini",
        price: "149,- / 165,- per pers",
        comment: [
        ]
      }
    ]
  },
  {
    category: "Chacrutiere-boks",
    items: [
      {
        id: 1,
        description: "Brie, manchego/comte, rødkittost, syltetøy, nøtter, italiensk salami, spekeskinke, oliven, aioli, pesto, focaccia, grissini, frukt",
        price: "Fingermat til 6 pers - 1200,-",
        comment: [
        ]
      }
    ]
  },
  {
    category: "Chacrutiere-buffet",
    items: [
      {
        id: 1,
        description: "Brie, manchego/comte, rødkittost, syltetøy, nøtter, italiensk salami, spekeskinke, oliven, aioli, pesto, focaccia, grissini, frukt, søtt",
        price: "399,- / 425,- per pers",
        comment: [
        ]
      }
    ]
  },
  {
    category: "Tillegg",
    items: [
      {
        id: 1,
        description: "Blåmuggost med fikenkjeks",
        price: "50,- / pers",
        comment: [
        ]
      },
      {
        id: 1,
        description: "Crostini med kremost og røkelaks",
        price: "75,- / 2stk",
        comment: [
          {
            description: "",
            price: ""
          }
        ]
      },
      {
        id: 1,
        description: "Lammekjøttboller med tzatsiki (varm/kald)",
        price: "75,- / 2stk",
        comment: []
      },
    ]
  },
  {
    category: "Boeuf Bourgignon",
    items: [
      {
        id: 1,
        description: "Fransk oksegryte med poteter, salat og focaccia",
        price: "",
        comment:[
          {
            description: "Catering: Leveres kaldt i engangsemballasje og må varmes selv",
            price: "399,- per pers / Selskap på Norvald: 399,-"
          }
        ]
      }
    ]
  },
  {
    category: "3 retters sesongmeny",
    items: [
      {
        id: 1,
        description: "Fransk oksegryte med poteter, salat og focaccia",
        price: "675,-",
        comment: [
          {
            description: "Lyst på noe mer? hva med å legge til en ostetallerken?",
            price: "129,- per pers"
          }
        ]
      }
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
    const cateringMenu = await getMenues(fakeCateringMenu);

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
    </div>
  )
}
