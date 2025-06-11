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
  const kaffe = tjonnasMenu[0]
  const {category, items} = kaffe

  return (
    <div>
      <div className="flex mt-14 items-center justify-between p-6 bg-yellow-300">
        <Image src="/images/Tjønnås_Logo-sort 2.png" height={200} width={200} alt='tjonnas logo' />
        <Text content='Kafè' variant='subheadline' as='p' />
      </div>
      <table className='w-full table-fixed border-collapse bg-yellow-50'>
        <thead>
          <th className='w-4/5 text-left'>{`${category[0].toUpperCase()}${category.slice(1)}`}</th>
          <th className='sr-only'>Price</th>
        </thead>
        <tbody>
          {items.map((coffee: {name: string, price: string}, index: number) => {
            
            const {name, price} = coffee;
            const capitalizedWord = capitalizeFirstLetter(name);
      
            return(
            <tr key={index}>
              <td>{capitalizedWord}</td>
               <td className='text-right'>{price},-</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
