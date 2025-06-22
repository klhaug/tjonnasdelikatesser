import React from 'react'
import Carousel from '../ui/Carousel'
import Text from '../ui/Text'
import Link from 'next/link'
import { sanityFetch } from '@/sanity/live';
import ImageUrlBuilder from "@sanity/image-url";
import { notFound } from 'next/navigation';
import { defineQuery } from 'next-sanity';
import { client } from '@/sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import {ProductItem} from '@/sanity/types'





const RECPRODUCTS_QUERY = defineQuery(`*[_type=="recommendedProducts"][0]{
 menuItems[] -> {
   productName,
  _id,
   price,
   lead,
   slug,
   image,
 }
}`);


const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? ImageUrlBuilder({ projectId, dataset }).image(source)
    : null;



export default  async function Products() {

  const { data: products } = await sanityFetch({
     query: RECPRODUCTS_QUERY,
   });
   if (!products) {
     notFound();
   }

   const {menuItems} = products;



   const dsMenuItems = menuItems.map((item: ProductItem) => {
    return (
      {
        name: item?.productName ?? null,
        lead: item?.lead ?? null,
        price: item?.price ?? null,
        slug: item?.slug?.current ?? null,
        imageUrl: item?.image ? urlFor(item.image)?.url() : null,
        imageAlt: item?.image?.alt ?? null,
        id: item?._id ?? null
      }
    )
   })
  

   console.log(dsMenuItems)

  



  return (
    <div className='bg-linear-120 from-yellow-100 to-red-100 flex flex-col  justify-center items-center relative gap-4 py-14'>
        <div className='flex flex-col max-w-[576px] px-6 w-full'>
            <Text variant='subheadline' extraStyling="text-red-500" content='Tjønnås anbefaler' as='p' />
            <div className='flex justify-between w-full items-end'>
                <Text variant='headline' content='Smaker du må prøve' as='h3' />
                <Link className='hover:cursor-pointer hover:underline text-red-500 underline-offset-2 z-50'  href="/products" ><Text content='Se alle' variant='primaryBold' as='p' /></Link>
            </div>
        </div>
        <div className='w-1/2 opacity-15 right-0 top-0  rounded-tl-full z-1 absolute h-full bg-red-300'></div>
                <div className='w-full md:hidden'>
                    <Carousel recProducts = {dsMenuItems} />
                </div>
    </div>
  )
}

