'use client'

import HorisontalProductCard from './HorisontalProductCard';


export default function Productlist({products, query}) {


    
  return (
    <div className='flex flex-col py-8 gap-6'>
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
          <h1 className='text-2xl'>Du har søkt på {query}</h1>
          <p>Denne varen finnes ikke i vår sortiment</p>
        </div>
        }
    </div>
  )
}
