import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import { defineQuery, PortableText} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { notFound } from "next/navigation";
import React from "react"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Contact from "@/components/sections/Contact";
import Tag from "@/components/ui/Tag";
import Image from "next/image";
import Text from "@/components/ui/Text";
import GoogleMaps from "@/components/googlemaps/GoogleMaps";
import Button from "@/components/ui/Button";

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export async function generateMetadata(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const searchParams = await props.searchParams
  const slug = params.slug
  const query = searchParams.query
}

const ABOUT_QUERY = defineQuery(`*[_type=="about" && aboutName == $slug][0] {
  aboutName,
  about -> {
    headline,
    image, 
    text,
  },
  focus ->{
    headline,
    focusPoint1,
    focusPoint2,
    focusPoint3
  },
  hero -> {
    whichAbout,
    eyebrow,
    image,
    text,
  },
  inspiration -> {
    headline,
    image1,
    image2,
    image3,
    image4
  },
  where -> {
    address,
    headline, 
    openingHours[] -> {
      day,
      time
    }
  }
} `);


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
  const { data: aboutData } = await sanityFetch({
    query: ABOUT_QUERY,
    params: await params,
  });
  if (!aboutData) {
    notFound();
  }

  const {
    about,
    aboutName,
    focus,
    hero,
    inspiration,
    where,
  } = aboutData

  const aboutSectionData = {
    headline: about?.headline ?? null,
    imageUrl: about?.image ? urlFor(about.image)?.url() : null,
    imageAlt: about?.image?.alt ?? null,
    photoCredits: about?.image?.photoCredits ?? null,
    text: about?.text ?? null
  }

  const focusSectionData = {
    headline: focus?.headline ?? null,
    focusPoints: [
      {
        title: focus?.focusPoint1?.title ?? null,
        text: focus?.focusPoint1?.text ?? null
      },
      {
        title: focus?.focusPoint2?.title ?? null,
        text: focus?.focusPoint2?.text ?? null
      },
      {
        title: focus?.focusPoint3?.title ?? null,
        text: focus?.focusPoint3?.text ?? null
      },

    ]
  }

  const heroSectionData = {
    whichAbout: hero?.whichAbout ?? null,
    eyebrow: hero?.eyebrow ?? null,
    text: hero?.text ?? null,
    imageUrl: hero?.image ? urlFor(hero.image)?.url() : null,
    imageAlt: hero?.image?.alt ?? null,
    photoCredits: hero?.image?.photoCredits ?? null,
  }
  

  const inspirationSectionData = {
    headline: inspiration?.headline ?? null,
    images: [
      {
        imageUrl: inspiration?.image1 ? urlFor(inspiration.image1)?.url() : null,
        imageAlt: inspiration?.image1 ? inspiration.image1.alt : null,
        photoCredits: inspiration?.image1 ? inspiration.image1.photoCredits : null,
      },
      {
        imageUrl: inspiration?.image2 ? urlFor(inspiration.image2)?.url() : null,
        imageAlt: inspiration?.image2 ? inspiration.image2.alt : null,
        photoCredits: inspiration?.image2 ? inspiration.image2.photoCredits : null,
      },
      {
        imageUrl: inspiration?.image3 ? urlFor(inspiration.image3)?.url() : null,
        imageAlt: inspiration?.image3 ? inspiration.image3.alt : null,
        photoCredits: inspiration?.image3 ? inspiration.image3.photoCredits : null,
      },
      {
        imageUrl: inspiration?.image4 ? urlFor(inspiration.image4)?.url() : null,
        imageAlt: inspiration?.image4 ? inspiration.image4.alt : null,
        photoCredits: inspiration?.image4 ? inspiration.image4.photoCredits : null,
      },
    ]
  }

  const whereSectionData = where;

  const dependantStyling = {
    tjonnasdelikatesser: "yellow",
    norma: "red",
    norvald: "blue"
  }

console.log(focus)

  // const productImageUrl = image
  // ? urlFor(image)?.url()
  // : null;

  const iconList = [
    "/icons/staricon.svg","/icons/globeicon.svg","/icons/handshakeicon.svg"
  ]
  
  
  return (
    <div className={`flex flex-col`}>
      {/* HERO */}
        <section id="hero" className={`bg-${aboutName ? dependantStyling[aboutName] : "yellow"}-50 flex flex-col justify-center items-center px-6 py-18 gap-6`}>
            {aboutName === "tjonnasdelikatesser" ? (
              <Image src='/images/Tjønnås_Logo-sort 2.png' alt="icon" height={80} width={250} />
            ) : null}
            {aboutName === "norma" ? (
              <Text variant="headline" content="Norma" as="h1" />
            ) : null}
            {aboutName ==="norvald" ? (
              <Text variant="headline" content="Norvald" as="h1" />
            ) : null}
            {aboutName === null ? (
              <Text variant="headline" content="Vi har dessverre problemer med henting av data for øyeblikket." as="h1" />
            ): null} 
          <h1 className="sr-only">{aboutName}</h1>
          {heroSectionData.eyebrow ? (
            <Tag variant={aboutName ? aboutName : "tjonnasdelikatesser"} textStyle="primary" content={heroSectionData.eyebrow}  /> 
            ) : null}
          {heroSectionData.imageUrl ? (
            <div className="gap-2 flex flex-col">
              <Image src={heroSectionData.imageUrl} className="rounded-md" alt={heroSectionData.imageAlt ? heroSectionData.imageAlt : "Image"} height={240} width={768} />
              <Text variant="primarySmall" content={`Foto: ${heroSectionData.photoCredits}`} as="p" />
            </div>
          ) : null}
          {heroSectionData.text ? (
               <div className="max-w-[768px]">
                 <PortableText value={heroSectionData.text} />
               </div>
          ): null}
        </section>

        {/* ABOUT */}
        <section id="about" className="flex flex-col justify-center items-center px-6 py-18 gap-6">
          {aboutSectionData.headline ? (
            <Text variant="headline" content={aboutSectionData.headline} extraStyling="text-left w-full max-w-[768px]" as="h2" />
          ): null}
          {aboutSectionData.text ? (
            <div className="max-w-[768px]">
              <PortableText value={aboutSectionData.text} />
            </div>
          ): null}
          {aboutSectionData.imageUrl ? (
            <div className="flex flex-col gap-2">
              <Image src={aboutSectionData.imageUrl} className="rounded-md" alt={aboutSectionData?.imageAlt ?? "alt image"} height={275} width={768} />
              <Text variant="primarySmall" content={`Foto: ${aboutSectionData?.photoCredits ?? "Kommer snart"}`} as="p" />
            </div>
          ): null}
        </section>
        
        {/* VAART FOKUS  */}
        <section id="fokus" className={`bg-${aboutName ? dependantStyling[aboutName] : "yellow"}-50 flex flex-col justify-center items-center px-6 py-18 gap-6`}>
        <div className="flex flex-col gap-4 items-start max-w-[768px]">
        {focusSectionData.headline ? (
            <Text variant="headline" content={focusSectionData.headline} extraStyling="text-left w-full max-w-[768px]" as="h2" />
          ): null}
        {focusSectionData.focusPoints.length > 0 ? (
          focusSectionData.focusPoints.map((point, index) => {
            const {title, text} = point;
            if (title === null || text === null) return;
            return (
              <div key={`${title}_${index}`} className="flex items-center gap-4">
                <Image src={iconList[index]} alt="icon" className="min-w-[24px]" height={24} width={24} />
                <div>
                  <Text variant="primary" content={title} extraStyling="text-left font-medium" as="h3" />
                  <Text variant="primarySmall" content={text} extraStyling="text-left" as="p" />
                </div>
              </div>
            )
          })
        ) : null}
        </div>
        </section>
        {/* INSPIRASJON */}
        <section id="inspiration" className={`bg-white flex flex-col justify-center items-center px-6 py-18 gap-6`}>
          {inspirationSectionData.headline ? (
            <Text variant="headline" content={inspirationSectionData.headline} extraStyling="text-left w-full max-w-[768px]" as="h2" />
          ): null}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-[768px]">
            
          {inspirationSectionData.images.length > 0 ? (
            inspirationSectionData.images.map((image, index) => {
              console.log(image)
              const {imageUrl, imageAlt} = image
              if(imageUrl === null || imageAlt === null) return;
              if(imageUrl === undefined || imageAlt === undefined) return;
              return (
                <Image key={`${imageUrl}_${index}`} className="object-cover aspect-square rounded-md" src={imageUrl} alt={imageAlt} height={500} width={500} />
              )
            })
          ): null}
          </div>
          {inspirationSectionData.headline ? (<div className="w-full flex flex-col gap-4 max-w-[768px]">
          <Button text="Se alle produkter" variant="primary-fill" color={`bg-${dependantStyling[aboutName ?? "tjonnasdelikatesser"]}-300`} href="/products" />
          <Button text="Se menyer" variant="secondary-fill" href="/menu" />
          </div>
          ): null}
        </section>
        <section id="where" className="flex flex-col justify-center items-center px-6 py-18 gap-6">
          <div className="rounded-md overflow-hidden outline-2 outline-yellow-300">
            <GoogleMaps />
          </div>
        </section>
        <Contact />
    </div>
  )

}