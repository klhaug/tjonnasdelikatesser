"use client"


import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import VerticalCard from './VerticalCard';

type Props = {
  name: string | null,
  lead: string | null,
  price: number | null,
  slug: string | null,
  imageUrl: string | null,
  imageAlt: string | null,
  id: string | null
 }


export default function Carousel({recProducts}: {recProducts: Props[]}) {
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
                    <SwiperSlide className='ml-6 h-12' key={id} >
                      <VerticalCard  name={name} description={lead} slug={slug} price={price} imageUrl={imageUrl} imageAlt={imageAlt}/>
                    </SwiperSlide>
                )
            })}
      </Swiper>
    </>
  );
}
