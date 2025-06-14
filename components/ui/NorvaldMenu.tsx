import Image from 'next/image'
import React from 'react'
import Text from './Text'
import { capitalizeFirstLetter } from './TjonnasMenu'

function getUniqueValues<T>(arr:T[]) {
  return [...new Set(arr)];
}


export default function NorvaldMenu({norvaldMenu}) {

  const categoryArray = norvaldMenu.map((item) => item.categoriTitle)
  const uniqueCategories = getUniqueValues(categoryArray);

  const filteredNorvaldMenu= [];
  uniqueCategories.map((category) => {
    const filtered = norvaldMenu.filter((item) => item.categoriTitle === category)
    filteredNorvaldMenu.push({
      category: category,
      items: filtered
    })
  })


  return (
    <div className='max-w-[1440px] m-auto'>
      <div className="flex mt-2 items-center justify-between p-6 bg-blue-700 ">
        <Image src="/images/norvald_white_cropped.png" height={55} width={110} alt='tjonnas logo' />
        <Text content='vinbar' variant='subheadline' extraStyling='text-white' as='p' />
      </div>

      <section className='bg-yellow-50 px-6 py-13 '>
        {filteredNorvaldMenu.map((catalogeItem, index) => {
          const {items, category} = catalogeItem;
        
          return (
            <table key={index} className='w-full mb-4 table-fixed border-separate border-spacing-y-3 '>
            <thead>
              <tr>
                <th className='w-4/6  text-left text-2xl font-medium text-grey-700'>{category}</th>
                <th className='sr-only'>Price</th>
              </tr>
            </thead>
            <tbody className=''>
              {items.length > 0 ? items.map((item) => {
                const {name, price, description, _id, housePick, conditionalPrice} = item;
                const capitalizedWord = capitalizeFirstLetter(name);
        
                return(
                <tr className='group hover:cursor-pointer ' key={_id}>
                  <td className='mt-2 font-normal'>
                    {housePick ? 
                      <span className={`${category === "Rødvin" ? "bg-blue-700 text-white" : "bg-blue-300"} p-1 text-sm rounded-sm w-fit`}>Husets {category.toLowerCase()}</span> : null}
                      <Text variant='primaryBold' extraStyling='' content={capitalizedWord} as='h3'/>
                      <Text variant='primarySmall' content={description} as='p'/>
                  </td>
                  <td className=' text-right relative font-semibold align-top'>
                    <span className='absolute h-2 w-2 rounded-full -translate-x-4 translate-y-2 hidden group-active:inline bg-blue-700'></span>
                    <span>{price}</span>
                    {conditionalPrice ? <Text variant='primarySmall' extraStyling='font-normal' content={conditionalPrice} as='p'/> : null}
                    </td>
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
