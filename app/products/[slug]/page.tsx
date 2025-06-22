import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SpecialRouteBackButton from '@/components/ui/SpecialRouteBackButton';
import React from 'react'
import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import Tag from '@/components/ui/Tag';
import Text from '@/components/ui/Text';



const PRODUCT_QUERY = defineQuery(`*[_type == "productItem" && slug.current == $slug][0]`);


const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;


export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: product } = await sanityFetch({
    query: PRODUCT_QUERY,
    params: await params,
  });
  if (!product) {
    notFound();
  }

  const {
    productName,
    price,
    inStock,
    image,
    description,
    category,
  } = product;

  const alt = product.image?.alt
  const slug = product.slug?.current

  const productImageUrl = image
  ? urlFor(image)?.url()
  : null;


return(
    <div>
        <Breadcrumbs breadcrumbs={[
          { label: 'Forsiden', href: '/' },
          { label: 'Produkter', href: '/products' },
          {
            label:`${productName}`,
            href: `/dashboard/invoices/${slug}`,
            active: true,
          },
        ]} />
        
      <section className='flex flex-col items-center'>
          <div className='max-w-[768px] px-6 py-12 flex flex-col justify-center items-start gap-4'>
            {category ? (
                <Tag variant='tjonnasdelikatesser' textStyle='primary' content={category}/>
              )
              :null
            }
            {productName ? (
                <Text content={productName} variant='headline' as='h2' />
              )
              : null
            }
            {description ? (
              <PortableText value={description} />
              )
              : null}
            {price ? (
              <Text content={`${price.toString()},-`} variant='primaryBold' extraStyling='text-xl' as='p' />
              )
              : null}
             {inStock ?  (
              <Text content={inStock ? "På lager":"Ikke på lager "} extraStyling={`mt-auto w-fit font-semibold rounded-sm ${inStock ? "text-green-500" : "text-red-500"}`} variant='captionLabel' as='p' />
            )
            : null}
            { productImageUrl ? (
                  <Image className='rounded-md object-cover' src={productImageUrl} height={500} width={768} alt={alt ? alt : ''} />
              )
              : null}
           <div className='flex gap-4'>
             <SpecialRouteBackButton />
             {/* <Button text={'Se alle produkter'} variant={'secondary-fixed'} href={'/products'} /> */}
           </div>
          </div>
      </section>
    </div>
  )
}