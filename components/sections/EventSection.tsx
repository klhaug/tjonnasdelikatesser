
import Text from "../ui/Text";
import EventsList from "./EventsList"
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
import { EventType } from "@/sanity/types";

const EVENTS_QUERY = defineQuery(`*[_type=="eventType"]`);

export default async function EventSection() {


  const { data }  = await sanityFetch({
    query: EVENTS_QUERY,
  });
  
  const events: EventType[] = data

  if (!data) {
    return(
      <>
        <h2>Feil ved henting av data</h2>
      </>
    )
  }

    return(
        <section className="mx-auto max-w-[1440px] md:px-12 px-6 flex flex-col gap-12 py-24">
        <Text
          variant={"headline"}
          content={"Arrangementer"}
          as={"h2"}
          extraStyling="border-b border-gray-300 pb-4"
        />
          <EventsList data={events} />
        </section>
    )
}