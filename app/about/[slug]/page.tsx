import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { notFound } from "next/navigation";
import React from "react"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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

//LAG EN STYLE VARIABEL SOM ER BASERT PÅ ABOUTNAME

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

  const aboutSection = {
    headline: about.headline,
    imageUrl: about.image ? urlFor(about.image)?.url() : null,
    imageAlt: about.image ? about.image.alt : null,
    photoCredits: about.image ? about.image.photoCredits : null,
    text: about.text
  }

  const focusSection = {

  }


  // const productImageUrl = image
  // ? urlFor(image)?.url()
  // : null;


  
  console.log(focus)
  console.log(focusSection)
  
  return (
    <div className="h-full">
        <h1>{aboutName}</h1>
    </div>
  )

}