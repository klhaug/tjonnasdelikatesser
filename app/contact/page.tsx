import { client } from '@/sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { notFound } from 'next/navigation';
import imageUrlBuilder from "@sanity/image-url";
import React from 'react'
import { sanityFetch } from '@/sanity/live';
import { defineQuery, PortableText } from 'next-sanity';
import GoogleMaps from '@/components/googlemaps/GoogleMaps';
import Tag from '@/components/ui/Tag';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import Contact from '@/components/sections/Contact';
import Breadcrumbs from '@/components/ui/Breadcrumbs';


const CONTACT_QUERY = defineQuery(`*[_type=="contact"] {
  aboutWhere -> {
    coordinates,
    headline,
    secHeadline,
    secText,
    text,
    openingHours[] ->
  },
  title,
  eyebrow,
  image,
  text
}`)

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
      const { data: contactData } = await sanityFetch({
        query: CONTACT_QUERY,
        params: await params,
      });
      if (!contactData) {
        notFound();
      }

      const destructuredContactData = {
        title: contactData[0]?.title ?? null,
        eyebrow: contactData[0]?.eyebrow ?? null,
        text: contactData[0]?.text ?? null,
        imageUrl: contactData[0]?.image ? urlFor(contactData[0].image)?.url() : null,
        imageAlt: contactData[0]?.image?.alt ?? null,
        photoCredits: contactData[0]?.image?.photoCredits ?? null,
        whereTitle: contactData[0]?.aboutWhere?.headline ?? null,
        whereText: contactData[0]?.aboutWhere?.text ?? null,
        whereSecHeadline: contactData[0]?.aboutWhere?.secHeadline ?? null,
        whereSecText: contactData[0]?.aboutWhere?.secText ?? null,
        coordinates: {
          lat: contactData[0]?.aboutWhere?.coordinates?.lat ?? null,
          lng: contactData[0]?.aboutWhere?.coordinates?.lng ?? null,
          },
        openingHours: contactData[0]?.aboutWhere?.openingHours ?? null
      }

      const {title, eyebrow, text, imageUrl, imageAlt, photoCredits, whereTitle, whereText, whereSecHeadline, whereSecText, coordinates, openingHours} = destructuredContactData

      return (
        <div>
            <Breadcrumbs breadcrumbs={[
          { label: 'Forsiden', href: '/' },
          {
            label: 'Kontakt',
            href: '/contact',
            active: true,
          },
        ]} />
          <section className='bg-yellow-50  flex flex-col justify-center items-center'>
            <div className='max-w-[768px] px-6 py-12 flex flex-col justify-center items-start gap-4'>
              {eyebrow ? (
                <Tag variant={'tjonnasdelikatesser'} content={eyebrow} textStyle={'subheadline'} /> 
                ):null}
              {title ? (
                <Text variant={'headline'} content={title} as={'h2'} />)
                :null}
              {text ?(
                <PortableText value={text} />)
                :null}
              {imageUrl ? (
                <div>
                  <Image className='rounded-md' src={imageUrl} alt={imageAlt ?? "alt"} width={768} height={400} />
                  <Text variant={'primarySmall'} content={`Foto: ${photoCredits}`} as={'p'} />
                </div>
              ): null}
            </div>
          </section>
          <section className='bg-white flex flex-col items-center gap-4'>
          <div className='max-w-[768px] px-6 py-12 flex flex-col justify-center items-start gap-4'>
            {whereTitle ? (
                <Text variant={'headline'} content={whereTitle} as={'h2'} />)
                :null}
                 {whereText ? (
                <Text content={whereText} variant='primary' as='p' />)
                :null}
            <div className="rounded-md overflow-hidden w-full max-w-[768px]">
            {coordinates?.lat && coordinates.lng ? (
              <GoogleMaps position={coordinates} />
              ): null}
              </div>
                <div className="flex flex-col gap-2 w-full mt-4 max-w-[768px] py-4">

                   {whereSecHeadline ? (
                    <Text variant="headline" extraStyling="text-left w-full"  content={whereSecHeadline} as="h2" />
                    ): null}
                    {whereSecText ? (
                      <Text variant="primary"  extraStyling="text-left w-full" content={whereSecText} as="p" />
                      ):null}
               {openingHours ? (
                  <div className="flex flex-col w-full">
                  {openingHours.map((openingHour) => {
                    const {day, time, _id} = openingHour;
            
                    return (
                      <div key={_id} className="flex justify-between w-full  gap-4">
                        {day ? (
                          <Text variant="primary" extraStyling="flex-1" content={`${day}:`} as="p" />
                          ): null}
                        {time ? (
                          <Text variant="primary" extraStyling="flex-1" content={time} as="p" />
                          ): null}
                      </div>
                    )
                  })}
                </div>
              ): null}
            </div>
          </div>
        </section>
        <section>
          <Contact />
        </section>
        </div>
      )}

