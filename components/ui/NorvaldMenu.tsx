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
            <table key={index} className='w-full mb-8 table-fixed border-separate border-spacing-y-3 '>
            <thead>
              <tr>
                <th className='w-4/6  text-left text-2xl font-medium text-grey-700'>{category === "red-wine" ? "Rødvin" : "Hvitvin"}</th>
                <th className='sr-only'>Price</th>
              </tr>
            </thead>
            <tbody className=''>
              {items.length > 0 ? items.map((item: {name: string, price: string}, index: number) => {
                const {name, price, description, id, isHouseWine} = item;
                const capitalizedWord = capitalizeFirstLetter(name);
        
                return(
                <tr key={index}>
                  <td className='mt-2 font-normal'>
                    {isHouseWine ? 
                      <span className={`${category === "red-wine" ? "bg-blue-700 text-white" : "bg-blue-300"} p-1 text-sm rounded-sm w-fit`}>Husets {category === "red-wine" ? "rød" : "hvit"}vin</span> : null}
                      <Text variant='primaryBold' extraStyling='' content={capitalizedWord} as='h3'/>
                      <Text variant='primarySmall' content={description} as='h3'/>
                  </td>
                  <td className=' text-right font-semibold align-top'>{price}</td>
                </tr>
                )
              }) : null}
            </tbody>
          </table>
          )
        })
        }
        </section>
    </div>
  )
}
