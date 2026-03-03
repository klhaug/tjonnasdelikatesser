"use client";

import { useState } from "react";
import { getDateTimeParts, formatMonthString } from "@/app/actions";
import Tag from "../ui/Tag";
import Text from "../ui/Text";
import Button from "../ui/Button";
import { EventType } from "@/sanity/types";

type Props = {
  data: EventType[]
}

export default function EventsList({data}: Props) {

  const [isComing, setIsComing] = useState(true);
  const [listLength, increaseListLength] = useState(10);

  const currentDate = new Date();


  const upComingEvents = [];
  const finishedEvents = [];


  for (const event of data) {
    if(event.datetime) {
      if (currentDate.toISOString() > event.datetime) {
        finishedEvents.push(event);
      } else {
        upComingEvents.push(event);
      }
    }
  }
  
  finishedEvents.sort((a, b) => a.datetime < b.datetime ? 1 : -1);

  const hasDateTime = (item: EventType) => item.datetime !== undefined
  upComingEvents.every(hasDateTime) ? upComingEvents.sort((a, b) => (a.datetime > b.datetime ? 1 : -1)) : null

  const cappedFinishedEvents = finishedEvents.slice(0, listLength);

  return (
  <> 
      <div className="flex gap-4 -mt-4">
        <button
          disabled={isComing}
          className={`text-base h-[44px] ${isComing ? "bg-yellow-350 hover:cursor-default" : "bg-white border border-gray-300 hover:cursor-pointer  hover:bg-yellow-300"} flex justify-center items-center text-nowrap w-fit h-11 rounded-lg pl-6 pr-6`}
          onClick={() => setIsComing(true)}
        >
          Kommende
        </button>
        <button
          disabled={!isComing}
          className={`text-base h-[44px] ${!isComing ? "bg-yellow-350 hover:cursor-default" : "bg-white border border-gray-300 hover:cursor-pointer  hover:bg-yellow-300"} flex justify-center items-center text-nowrap w-fit h-11 rounded-lg pl-6 pr-6`}
          onClick={() => setIsComing(false)}
        >
          Tidligere
        </button>
      </div>
      {isComing ? upComingEvents.length > 0
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
              _id,
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
              <div
                key={_id}
                className="flex lg:flex-row flex-col gap-4 border-b border-gray-200 lg:pb-4 pb-8"
              >
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
                      {location ? <Tag
                        variant={location}
                        content={locationForTag}
                        textStyle={"captionLabel"}
                      /> : null}
                      {discount ? (
                        <span className="bg-green-500 flex items-center px-1 w-max rounded-sm text-sm leading-[18px] text-white">
                          Rabatt %
                        </span>
                      ) : null}
                    </div>
                    <Text variant={"headline"} content={title} as={"h3"} />
                  {  description ? <Text
                      variant={"primary"}
                      content={description}
                      extraStyling="hidden lg:block"
                      as={"p"}
                    /> : null}
                    <a
                      href={`https://maps.google.com/?q=${address}`}
                      target="_blank"
                    >
                      {address}
                    </a>
                  </div>
                </div>
                {description ? <Text
                  variant={"primary"}
                  content={description}
                  extraStyling="lg:hidden"
                  as={"p"}
                /> : null }
                <div className="lg:w-[250px] lg:mx-6 flex flex-shrink-0 flex-col justify-center">
                  <span>Pris:</span>
                  <span className="text-2xl lg:text-nowrap flex flex-start leading-7 font-medium">
                    {price
                      ? discount
                        ? `${price},- / ${discount},-`
                        : `${price},-`
                      : "Gratis"}
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <Button
                    text={"Påmelding"}
                    variant={"primary-fill"}
                    href={"/contact"}
                  />
                  {eventLink ? (
                    <Button
                      text={"Se arrangementet"}
                      variant={"secondary-fill"}
                      href={eventLink}
                      target="_blank"
                    />
                  ) : null}
                </div>
              </div>
            );
          })
        : 
              <div className="border-b pb-8 border-gray-200">
          <Text variant={"headline"} content={"Her er det dessverre ingen arrangementer for øyeblikket."} as={"h2"} />
        </div>
        : null}
      {!isComing ? cappedFinishedEvents.length > 0
        ? cappedFinishedEvents.map((e) => {
            const {
              datetime,
              title,
              address,
              price,
              description,
              eventLink,
              location,
              discount,
              _id,
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
              <div
                key={_id}
                className="flex grayscale lg:flex-row flex-col gap-4 border-b border-gray-200 lg:pb-4 pb-8"
              >
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
                   {location ?   <Tag
                        variant={location}
                        content={locationForTag}
                        textStyle={"captionLabel"}
                      /> : null}
                      {discount ? (
                        <span className="bg-green-500 flex items-center px-1 w-max rounded-sm text-sm leading-[18px] text-white">
                          Rabatt %
                        </span>
                      ) : null}
                    </div>
                    <Text variant={"headline"} content={title} as={"h3"} />
                   {description ? <Text
                      variant={"primary"}
                      content={description}
                      extraStyling="hidden lg:block"
                      as={"p"}
                    /> : null}
                    <a
                      href={`https://maps.google.com/?q=${address}`}
                      target="_blank"
                    >
                      {address}
                    </a>
                  </div>
                </div>
               { description ? <Text
                  variant={"primary"}
                  content={description}
                  extraStyling="lg:hidden"
                  as={"p"}
                /> : null}
                <div className="lg:w-[250px] lg:mx-6 flex flex-shrink-0 flex-col justify-center">
                  <span>Pris:</span>
                  <span className="text-2xl lg:text-nowrap flex flex-start leading-7 font-medium">
                    {price
                      ? discount
                        ? `${price},- / ${discount},-`
                        : `${price},-`
                      : "Gratis"}
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <button
                    disabled
                    className="text-base h-[44px] bg-yellow-300 flex justify-center items-center text-nowrap w-full rounded-lg pl-6 pr-6"
                  >
                    Påmelding
                  </button>
                  {eventLink ? (
                    <Button
                      text={"Se arrangementet"}
                      variant={"secondary-fill"}
                      href={eventLink}
                      target="_blank"
                    />
                  ) : null}
                </div>
              </div>
            );
          })
        : 
        <div className="border-b pb-8 border-gray-200">
          <Text variant={"headline"} content={"Her er det dessverre ingen arrangementer for øyeblikket."} as={"h2"} />
        </div>
        
        : null}
      {finishedEvents.length > cappedFinishedEvents.length && !isComing ? (
        <button
          className="text-base bg-yellow-300 flex justify-center items-center text-nowrap w-fit hover:bg-yellow-350 hover:cursor-pointer h-11 rounded-lg pl-6 pr-6"
          onClick={() => increaseListLength(listLength + 10)}
        >
          Last inn flere
        </button>
      ) : null}
    </>
  );
}
