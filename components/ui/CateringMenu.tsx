import Image from 'next/image'
import React from 'react'
import Text from './Text'

//HOLY MOLY Det må finnes en penere måte å skrive dette på...


export default function CateringMenu({cateringMenu}) {

  return (
    <div>
      <div className="flex mt-2 items-center justify-between p-6 bg-green-500">
        <Image src="/images/norvald_white_cropped.png" height={55} width={110} alt='tjonnas logo' />
        <Text content='vinbar' variant='subheadline' extraStyling='text-white' as='p' />
      </div>
      <section className='bg-yellow-50 px-6 py-13'>

        {cateringMenu.map((catalogeItem, index) => {
          const {items, category} = catalogeItem;
          
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

              {items.length > 0 ? items.map((item: {name: string, price: string}, index: number) => {
                const {description, price} = item;
        
                return (
                  <tr key={index} >
                    <td className='mt-2 font-normal'>
                        <Text variant='primarySmall' content={description} as='h3'/>
                    </td>
                        <td className=' text-right font-semibold align-top'>{price}</td>
                  </tr>
                )
              }) : null}
            </tbody>
          </table>
            )
          }
        
          return (
            <table key={index} className='w-full mb-4 table-fixed border-separate border-spacing-y-3 '>
            <thead>
              <tr>
                <th className='w-4/6  text-left text-2xl font-medium text-green-500'>{category}</th>
              </tr>
            </thead>
            <tbody>

              {items.length > 0 ? items.map((item: {name: string, price: string}, index: number) => {
                const {description} = item;

                if(description.length === 0 || description === undefined) return;

                return (
                  <tr key={index} >
                    <td className='mt-2 font-normal'>
                        <Text variant='primarySmall' content={description} as='h3'/>
                    </td>
                  </tr>
                )
              }) : null}

              {items.length > 0 ? items.map((item: {name: string, price: string}, index: number) => {
                const {price} = item;

                if(price.length === 0 || price === undefined) return;
                
                return (
                    <tr key={index}>
                      <td className=' text-left font-semibold align-top'>{price}</td>
                    </tr>
                )
              }) : null}

              {items.length > 0 ? items.map((item: {name: string, price: string}, index: number) => {
                
                const {comment} = item;

                if(comment.length === 0 || comment === undefined) return;

                const {description} = comment[0];

                return (
                    <tr key={index}>
                      <td className=' text-left align-top'>
                       <Text content={description} variant='subheadline' as='p' /> 
                      </td>
                    </tr>
                )
              }) : null}
 
              {items.length > 0 ? items.map((item: {name: string, price: string}, index: number) => {
                
                const {comment} = item;

                if(comment.length === 0 || comment === undefined) return;

                const {price} = comment[0];

                return (
                    <tr key={index}>
                      <td className=' text-left align-top'>
                       <Text content={price} variant='primaryBold' as='p' /> 
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
