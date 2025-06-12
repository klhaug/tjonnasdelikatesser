import Image from 'next/image'
import React from 'react'
import Text from './Text'
import { capitalizeFirstLetter } from './TjonnasMenu'


export default function NorvaldMenu({norvaldMenu}) {

  return (
    <div>
      <div className="flex mt-2 items-center justify-between p-6 bg-blue-700">
        <Image src="/images/norvald_white_cropped.png" height={55} width={110} alt='tjonnas logo' />
        <Text content='vinbar' variant='subheadline' extraStyling='text-white' as='p' />
      </div>

      <section className='bg-yellow-50 px-6 py-13'>
        {norvaldMenu.map((catalogeItem, index) => {
          const {items, category} = catalogeItem;
        
          return (
            <table key={index} className='w-full mb-8 table-fixed border-separate border-spacing-2 '>
            <thead>
              <tr>
                <th className='w-4/6  text-left text-2xl font-medium text-grey-700'>{`${category[0].toUpperCase()}${category.slice(1)}`}</th>
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
