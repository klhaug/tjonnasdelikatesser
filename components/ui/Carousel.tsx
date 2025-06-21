"use client"


import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import VerticalCard from './VerticalCard';

type Food = {
  name: string
  price: string
  description: string
  imageUrl: string
  productId: number
}

const fakeFoodDataBase: Food[] = [
  {
      productId: 1,
      name: "Tortillalefser",
      price: "199,-",
      description: "Myke og smidige lefser som passer perfekt til taco, wraps og burritos. Enkle å rulle, gode å spise.",
      imageUrl: "/images/241A8964.jpg"
  },
  {
      productId: 2,
      name: "Tortillalefser",
      price: "199,-",
      description: "Myke og smidige lefser som passer perfekt til taco, wraps og burritos. Enkle å rulle, gode å spise.",
      imageUrl: "/images/241A8964.jpg"
  },
  {
      productId: 3,
      name: "Tortillalefser",
      price: "199,-",
      description: "Myke og smidige lefser som passer perfekt til taco, wraps og burritos. Enkle å rulle, gode å spise.",
      imageUrl: "/images/241A9129.jpg"
  },
]

export default function Carousel({recProducts}) {
  return (
    <>
      <Swiper
        slidesPerView={1.25}
        breakpoints={{
            554: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            866: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        spaceBetween={0}
        loop={true}
        className="w-full relative"
      >
          {recProducts.map((product) => {
                const {name, lead, price, slug, imageUrl, imageAlt, id} = product;
                return (
                    <SwiperSlide className='ml-6' key={id} >
                      <VerticalCard  name={name} description={lead} slug={slug} price={price} imageUrl={imageUrl} imageAlt={imageAlt}/>
                    </SwiperSlide>
                )
            })}
      </Swiper>
    </>
  );
}
