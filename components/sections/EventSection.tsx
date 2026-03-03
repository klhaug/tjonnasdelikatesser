import Text from "../ui/Text";
import EventsList from "./EventsList"



export default async function EventSection() {

  const response = await fetch("http://localhost:3000/testdata/events.json")
  const data = await response.json()

    return(
        <section className="mx-auto max-w-[1440px] md:px-12 px-6 flex flex-col gap-12 py-24">
        <Text
          variant={"headline"}
          content={"Arrangementer"}
          as={"h2"}
          extraStyling="border-b border-gray-300 pb-4"
        />
          <EventsList data={data} />
        </section>
    )
}