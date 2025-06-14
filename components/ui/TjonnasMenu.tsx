import Image from 'next/image'
import React from 'react'
import Text from './Text'

function getUniqueValues<T>(arr:T[]) {
  return [...new Set(arr)];
}

type MenuItems = {
  _id: string
  conditionalPrice: string
  name: string
  description: string
  housePick: boolean
  price: string
}

type Menu = {
  categoriTitle: string
  items: MenuItems
}

export function capitalizeFirstLetter(input:string) {
  const firstLetter = input[0]
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = input.slice(1)
  const capitalizedWord = firstLetterCap + remainingLetters
  return capitalizedWord;
}

export default function TjonnasMenu({tjonnasMenu}) {

  const categoryArray = tjonnasMenu.map((item) => item.categoriTitle)
  const uniqueCategories = getUniqueValues(categoryArray);

  const filteredTjonnasMenu= [];
  uniqueCategories.map((category) => {
    const filtered = tjonnasMenu.filter((item) => item.categoriTitle === category)
    filteredTjonnasMenu.push({
      category: category,
      items: filtered
    })
  })

  return (
    <div>
      <div className="flex mt-2 items-center justify-between p-6 bg-yellow-300">
        <Image src="/images/Tjønnås_Logo-sort 2.png" height={55} width={175} alt='tjonnas logo' />
        <Text content='Kafè' variant='subheadline' as='p' />
      </div>

      <section className='bg-yellow-50 px-6 py-13'>
        {filteredTjonnasMenu.map((catalogeItem, index) => {
          const {items, category} = catalogeItem;
        
          return (
            <table key={index} className='w-full mb-8 table-fixed border-separate border-spacing-y-3'>
            <thead>
              <tr>
                <th className='w-4/6  text-left text-2xl font-medium text-yellow-700'>{category}</th>
                <th className='sr-only'>Price</th>
              </tr>
            </thead>
            <tbody className=''>
              {items.length > 0 ? items.map((item: {name: string, price: string}, index: number) => {
                const {name, price} = item;
                const capitalizedWord = capitalizeFirstLetter(name);
        
                return(
                <tr key={index}>
                  <td className='mt-2 font-normal'>{capitalizedWord}</td>
                  <td className=' text-right font-semibold align-top'>{price}</td>
                </tr>
                )
              }) : null}
            </tbody>
          </table>
          )
        })
        }
          <p className='text-left text-2xl font-medium text-yellow-700'>Lyst på noe søtt? Kom innom og sjekk disken</p>  
        </section>
    </div>
  )
}
