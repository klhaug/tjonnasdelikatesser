import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text"
import TestCard from "@/components/ui/TestCard"
import VerticalAccordionCard from "@/components/ui/VerticalAccordionCard"

type Cafe = {
  id: "tjonnas" | "norma" | "norvald"
  title: string
  ingress: string
}

const fakeDataBase: Cafe[] = [
  {
    id: "tjonnas",
    title: "Tjønnås Delikatesser",
    ingress: "En lun kafé midt i hjertet av campus. Her får du håndbrygget kaffe, ferske bakverk og ekte mat laget med omtanke – perfekt for en pause mellom forelesninger eller et rolig møte med gode venner."
  },
  {
    id: "tjonnas",
    title: "Tjønnås Delikatesser",
    ingress: "En lun kafé midt i hjertet av campus. Her får du håndbrygget kaffe, ferske bakverk og ekte mat laget med omtanke – perfekt for en pause mellom forelesninger eller et rolig møte med gode venner."
  },
  {
    id: "tjonnas",
    title: "Tjønnås Delikatesser",
    ingress: "En lun kafé midt i hjertet av campus. Her får du håndbrygget kaffe, ferske bakverk og ekte mat laget med omtanke – perfekt for en pause mellom forelesninger eller et rolig møte med gode venner."
  },
]

export default function Home() {
  return (
    <div className="flex gap-8 flex-col">
      <Text variant="captionLabel" as="p" content="Hello World!"/>
      <div className="flex gap-2 justify-evenly border p-8">
        <Button variant="primary-fill" text="Primary Button" href="/" />
        <Button variant="secondary-fixed" text="Secondary Button" href="/" />
        <Button variant="tertiary-fixed" text="Tertiary Button" href="/" />
      </div>
      <div className="flex w-3xl gap-2 border p-8">
        <Button variant="primary-fill" text="Primary Button" href="/" />
        <Button variant="tertiary-fill" text="Tertiary Button" href="/" />
        <Button variant="secondary-fill" text="Secondary Button" href="/" />
      </div>
      <TestCard />
      <VerticalAccordionCard id="tjonnas" title={fakeDataBase[0].title} ingress="fasd" imageUrl="/images/241A9065.jpg"/>
    </div>
  );
}
