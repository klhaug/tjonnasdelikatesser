import Image from 'next/image'
import React from 'react'
import Text from './Text'


function getUniqueValues<T>(arr:T[]) {
  return [...new Set(arr)];
}


export default function CateringMenu({cateringMenu}) {

  const categoryArray = cateringMenu.map((item) => item.categoriTitle)
  const uniqueCategories = getUniqueValues(categoryArray);

  const filteredCateringMenu= [];
  uniqueCategories.map((category) => {
    const filtered = cateringMenu.filter((item) => item.categoriTitle === category)
    filteredCateringMenu.push({
      category: category,
      items: filtered
    })
  })


  return (
    <div>
      <div className="flex mt-2 items-center justify-between p-6 bg-green-500">
        <Image src="/images/norvald_white_cropped.png" height={55} width={110} alt='tjonnas logo' />
        <Text content='vinbar' variant='subheadline' extraStyling='text-white' as='p' />
      </div>
      <section className='bg-yellow-50 px-6 py-13'>

        {/* EGEN MAP FOR TILLEGG SLIK AT DEN HAR ANNEN LAYOUT */}

        {filteredCateringMenu.map((catalogeItem, index) => {
          const {items, category} = catalogeItem;
          const {price, description, name, conditionalPrice} = items[0]
          
          if (category === "Tillegg") {
            return (
              <table key={index} className='w-full mb-4 table-fixed border-separate border-spacing-y-3 '>
            <thead>
              <tr>
                <th className='w-4/6  text-left text-2xl font-medium text-green-500'>{category}</th>
                <th className='sr-only'>Price</th>
              </tr>
            </thead>
            <tbody className=''>

              {items.length > 0 ? items.map((item) => {
                const {price, _id, name} = item;
        
                return (
                  <tr key={_id} >
                    <td className='mt-2 font-normal'>
                        <Text variant='primarySmall' content={name} as='h3'/>
                    </td>
                        <td className=' text-right font-semibold align-top'>{price}</td>
                  </tr>
                )
              }) : null}
            </tbody>
          </table>
            )
          }

          // RESTEN AV MENYEN
        
          return (
            <table key={index} className='w-full mb-4 table-fixed border-separate border-spacing-y-3 '>
            <thead>
              <tr>
                <th className='w-4/6  text-left text-2xl font-medium text-green-500'>{category}</th>
              </tr>
            </thead>
            <tbody>
                  <tr key={index} >
                    <td className='mt-2 font-normal'>
                        <Text variant='primarySmall' content={name} as='h3'/>
                    </td>
                  </tr>
                  <tr>
                      <td className=' text-left font-semibold align-top'>{price}</td>
                    </tr>
                    {description ? <tr>
                      <td className=' text-left align-top'>
                       <Text content={description} variant='subheadline' as='p' /> 
                      </td>
                    </tr> : null}
                    {conditionalPrice ? <tr>
                      <td className=' text-left align-top'>
                       <Text content={conditionalPrice} variant='primaryBold' as='p' /> 
                      </td>
                    </tr> : null}
            </tbody>
          </table>
          )
        })
        }
        </section>
    </div>
  )
}
