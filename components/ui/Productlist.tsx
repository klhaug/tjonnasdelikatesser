'use client'

import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import HorisontalProductCard from './HorisontalProductCard';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/client';

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;



export default function Productlist({products, query}) {
  console.log('Product List rebuilding')



    console.log("MY PRODUCTS", products[0])
    
    
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 py-8 gap-6'>
        {products.length > 0 ? products.map((product) => {
          const {productName, _id, description, price, image, category, inStock} = product;
          const imgUrl = image ? urlFor(image)?.width(750).url() : null;

          return(
              <HorisontalProductCard
                key={_id}
                name={productName}
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
