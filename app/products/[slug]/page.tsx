import Breadcrumbs from '@/components/ui/Breadcrumbs';
import React, { Suspense } from 'react'
import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import Tag from '@/components/ui/Tag';
import Text from '@/components/ui/Text';
import { CardSkeleton } from '@/components/ui/Skeletons';
import Link from 'next/link';

const PRODUCT_QUERY = defineQuery(`*[
  _type == "productItem" &&
  slug.current == $slug
][0]`);


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

  console.log(params)

  const {
    productName,
    price,
    inStock,
    image,
    image: {alt},
    description,
    category,
    slug: {current: slug},
  } = product;


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
        
      <section className='flex flex-col px-6 py-12 gap-4'>
        <Tag variant='tjonnasdelikatesser' textStyle='primary' content={category}/>
        {productName ? (
          <Text content={productName} variant='headline' as='h2' />
        )
        : null
        }
          { description ? (
            <PortableText value={description} />
          )
          : null}
          {price ? (
            <Text content={`${price.toString()},-`} variant='primaryBold' extraStyling='text-xl' as='p' />
        ): null}
          <Text content={inStock ? "På lager":"Ikke på lager "} extraStyling={`mt-auto w-fit font-semibold rounded-sm ${inStock ? "text-green-500" : "text-red-500"}`} variant='captionLabel' as='p' />
            <Suspense fallback={<CardSkeleton />}>
              <Image className='rounded-md object-cover' src={productImageUrl} height={500} width={500} alt={alt} />
            </Suspense>
          <Link href={'/products'} className='text-base h-[44px] bg-yellow-300 flex justify-center items-center text-nowrap w-full transition-all hover:bg-yellow-350 hover:cursor-pointer gap-2 group rounded-lg pl-6 pr-6'><Image src='/icons/arrow.svg' className='group-hover:-translate-x-1 transition-all rotate-180' alt='icon' height={16} width={16} />Tilbake</Link>
      </section>

    </div>
  )
}