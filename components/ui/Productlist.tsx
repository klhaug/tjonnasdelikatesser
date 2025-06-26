'use client'

import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import HorisontalProductCard from './HorisontalProductCard';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/client';
import {PRODUCTS_QUERYResult} from '@/sanity/types'

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;


type Props = {
  products: PRODUCTS_QUERYResult
  query: string
}


export default function Productlist({products, query}: Props) {    

  return (
    <div role='region' className='grid md:grid-cols-1 lg:grid-cols-1 grid-cols-1 h-fit lg:w-2/3 md:gap-8 py-8 gap-6'>
        {products.length > 0 ? products.map((product) => {
          const {productName, _id, price, lead, image, category, inStock, slug} = product;
          const imgUrl = image ? urlFor(image)?.width(750).url() : null;

          return(
              <HorisontalProductCard
                key={_id}
                name={productName}
                description={lead}
                price={price}
                imgUrl={imgUrl}
                alt={image ? image.alt : undefined}
                slug={slug ? slug.current : undefined}
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
