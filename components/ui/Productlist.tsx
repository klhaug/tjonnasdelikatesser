'use client'

import HorisontalProductCard from './HorisontalProductCard';


export default function Productlist({products, query}) {
  console.log('Product List rebuilding')


    
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 py-8 gap-6'>
        {products.length > 0 ? products.map((product) => {
          const {name, id, description, price, imgUrl, category, inStock} = product
          return(
              <HorisontalProductCard
                key={id}
                name={name}
                description={description}
                price={price}
                imgUrl={imgUrl}
                category={category}
                inStock={inStock}
              />
          )
          })
        : <div>
          <h1 className='text-2xl'>Du har søkt på <strong>&quot;{query}&quot;</strong></h1>
          <p>Denne varen finnes ikke i vår sortiment</p>
        </div>
        }
    </div>
  )
}
