"use client";

import { useState } from "react";
import useSWR from "swr";
import {
  getDateTimeParts,
  formatMonthString,
  tagVariants,
} from "@/app/actions";
import Tag from "../ui/Tag";
import Text from "../ui/Text";
import Button from "../ui/Button";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Event({}) {
  const [isComing, setIsComing] = useState(true);

  const { data, error, isLoading } = useSWR(`/testData/events.json`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const currentDate = new Date();

  const upComingEvents = [];
  const finishedEvents = [];

  for (const event of data) {

    if (currentDate.toISOString() > event.datetime) {
      finishedEvents.push(event);
    } else {
      upComingEvents.push(event);
    }
  }

  upComingEvents.sort((a, b) => a.datetime > b.datetime ? 1 : -1)
  finishedEvents.sort((a, b) => a.datetime > b.datetime ? 1 : -1)


  return (
    <section className="mx-auto max-w-[1440px] md:px-12 px-6 flex flex-col gap-12 py-24">
      <Text variant={"headline"} content={"Arrangementer"} as={"h2"} extraStyling="border-b border-gray-300 pb-4"/>
      <div className="flex gap-4 -mt-4">
        <button disabled={isComing} className={`text-base h-[44px] ${isComing ? "bg-yellow-350 hover:cursor-default" : "bg-white border border-gray-300 hover:cursor-pointer  hover:bg-yellow-300"} flex justify-center items-center text-nowrap w-fit h-11 rounded-lg pl-6 pr-6`} onClick={() => setIsComing(true)}>Kommende</button>
        <button disabled={!isComing} className={`text-base h-[44px] ${!isComing ? "bg-yellow-350 hover:cursor-default" : "bg-white border border-gray-300 hover:cursor-pointer  hover:bg-yellow-300"} flex justify-center items-center text-nowrap w-fit h-11 rounded-lg pl-6 pr-6`} onClick={() => setIsComing(false)}>Tidligere</button>
      </div>
      {isComing
        ? upComingEvents.map((e) => {
            const {
              datetime,
              title,
              address,
              price,
              description,
              eventLink,
              location,
              discount,
              id,
            } = e;

            const dateTimeParts = getDateTimeParts(datetime);
            const { weekday, day, month, year, hour, minute } = dateTimeParts;
            const formattedMonth = formatMonthString(month);
            let locationForTag = "Tjønnås delikatesser";

            switch (location) {
              case "tjonnasdelikatesser":
                break;
              case "norma":
                locationForTag = "Norma";
                break;
              case "norvald":
                locationForTag = "Norvald";
                break;
              default:
                locationForTag = "Tjønnås delikatesser";
            }

            return (
              <div key={id} className="flex lg:flex-row flex-col gap-4 border-b border-gray-200 lg:pb-4 pb-8">
                <div className="flex flex-row gap-4 lg:gap-2">
                  <div className="flex flex-col bg-yellow-100 rounded-md justify-center items-center gap-3 p-6">
                    <time
                      dateTime={datetime}
                      className="text-2xl leading-7 font-medium"
                    >
                      {day}.{formattedMonth}
                    </time>
                    <time
                      dateTime={datetime}
                      className="text-base leading-[18px] text-nowrap"
                    >
                      {weekday?.slice(0, 3)} - {hour}:{minute}
                    </time>
                  </div>
                  <div className="lg:mx-6 flex flex-col justify-center gap-2">
                    <div className="flex gap-2">
                      <Tag
                        variant={location}
                        content={locationForTag}
                        textStyle={"captionLabel"}
                      />
                      {discount ? (
                        <span className="bg-green-500 flex items-center px-1 w-max rounded-sm text-sm leading-[18px] text-white">
                          Rabatt %
                        </span>
                      ) : null}
                    </div>
                    <Text variant={"headline"} content={title} as={"h3"} />
                    <Text variant={"primary"} content={description} extraStyling="hidden lg:block"as={"p"} />
                    <a
                      href={`https://maps.google.com/?q=${address}`}
                      target="_blank"
                    >
                      {address}
                    </a>
                  </div>

                </div>
                <Text variant={"primary"} content={description} extraStyling="lg:hidden"as={"p"} />
                <div className='lg:w-[250px] lg:mx-6 flex flex-shrink-0 flex-col justify-center'>
                  <span>Pris:</span>
                   <span className="text-2xl lg:text-nowrap flex flex-start leading-7 font-medium">
                    {price ? 
                  discount ? `${price},- / ${discount},-` : `${price},-`
                  : "Gratis"}
                  </span> 
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <Button text={"Påmelding"} variant={"primary-fill"} href={"/contact"} />
                  {eventLink ? <Button text={"Se arrangementet"} variant={"secondary-fill"} href={eventLink} target="_blank" /> : null }
                </div>
              </div>
            );
          })
        : finishedEvents.map((e) => {
          const {
            datetime,
            title,
            address,
            price,
            description,
            eventLink,
            location,
            discount,
            id,
          } = e;

          const dateTimeParts = getDateTimeParts(datetime);
          const { weekday, day, month, year, hour, minute } = dateTimeParts;
          const formattedMonth = formatMonthString(month);
          let locationForTag = "Tjønnås delikatesser";

          switch (location) {
            case "tjonnasdelikatesser":
              break;
            case "norma":
              locationForTag = "Norma";
              break;
            case "norvald":
              locationForTag = "Norvald";
              break;
            default:
              locationForTag = "Tjønnås delikatesser";
          }

          return (
            <div key={id} className="flex lg:flex-row flex-col gap-4 border-b border-gray-200 lg:pb-4 pb-8">
              <div className="flex flex-row gap-2">
                <div className="flex flex-col bg-yellow-100 rounded-md justify-center items-center gap-3 p-6">
                  <time
                    dateTime={datetime}
                    className="text-2xl leading-7 font-medium"
                  >
                    {day}.{formattedMonth}
                  </time>
                  <time
                    dateTime={datetime}
                    className="text-base leading-[18px] text-nowrap"
                  >
                    {weekday?.slice(0, 3)} - {hour}:{minute}
                  </time>
                </div>
                <div className="lg:mx-6 flex flex-col justify-center gap-2">
                  <div className="flex gap-2">
                    <Tag
                      variant={location}
                      content={locationForTag}
                      textStyle={"captionLabel"}
                    />
                    {discount ? (
                      <span className="bg-green-500 flex items-center px-1 w-max rounded-sm text-sm leading-[18px] text-white">
                        Rabatt %
                      </span>
                    ) : null}
                  </div>
                  <Text variant={"headline"} content={title} as={"h3"} />
                  <Text variant={"primary"} content={description} extraStyling="hidden lg:block"as={"p"} />
                  <a
                    href={`https://maps.google.com/?q=${address}`}
                    target="_blank"
                  >
                    {address}
                  </a>
                </div>

              </div>
              <Text variant={"primary"} content={description} extraStyling="lg:hidden"as={"p"} />
              <div className='lg:w-[250px] lg:mx-6 flex flex-shrink-0 flex-col justify-center'>
                <span>Pris:</span>
                 <span className="text-2xl lg:text-nowrap flex flex-start leading-7 font-medium">
                  {price ? 
                discount ? `${price},- / ${discount},-` : `${price},-`
                : "Gratis"}
                </span> 
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Button text={"Påmelding"} variant={"primary-fill"} href={"/contact"} />
                {eventLink ? <Button text={"Se arrangementet"} variant={"secondary-fill"} href={eventLink} target="_blank" /> : null }
              </div>
            </div>
          );
          })}
    </section>
  );
}
