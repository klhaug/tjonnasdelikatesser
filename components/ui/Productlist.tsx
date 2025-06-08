'use client'

import HorisontalProductCard from './HorisontalProductCard';


export default function Productlist({products}) {


    
  return (
    <div className='flex flex-col gap-6'>
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
        : <h1>Denne varen finnes ikke i vår sortiment</h1>
        }
    </div>
  )
}
