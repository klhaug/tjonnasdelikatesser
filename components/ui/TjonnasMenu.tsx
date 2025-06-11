import Image from 'next/image'
import React from 'react'
import Text from './Text'

function capitalizeFirstLetter(input:string) {
  const firstLetter = input[0]
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = input.slice(1)
  const capitalizedWord = firstLetterCap + remainingLetters
  return capitalizedWord;
}

export default function TjonnasMenu({tjonnasMenu}) {

  return (
    <div>
      <div className="flex mt-14 items-center justify-between p-6 bg-yellow-300">
        <Image src="/images/Tjønnås_Logo-sort 2.png" height={200} width={200} alt='tjonnas logo' />
        <Text content='Kafè' variant='subheadline' as='p' />
      </div>

      {tjonnasMenu.map((catalogeItem, index) => {

        const {items, category} = catalogeItem;
        
        return (
          <table key={index} className='w-full table-fixed border-collapse bg-yellow-50'>
          <thead>
            <th className='w-4/5 p-2 text-left text-2xl font-medium text-yellow-700'>{`${category[0].toUpperCase()}${category.slice(1)}`}</th>
            <th className='sr-only'>Price</th>
          </thead>
          <tbody className=''>
            {items.length > 0 ? items.map((item: {name: string, price: string}, index: number) => {
              const {name, price} = item;
              const capitalizedWord = capitalizeFirstLetter(name);
        
              return(
              <tr key={index}>
                <td className='p-2'>{capitalizedWord}</td>
                <td className='p-2 text-right'>{price},-</td>
              </tr>
              )
            }) : null}
          </tbody>
        </table>
        )
      })
      }
    </div>
  )
}
