import React from 'react'
import VerticalAccordionCard from '../ui/VerticalAccordionCard'
import Tag from '../ui/Tag'
import Text from '../ui/Text'

type Cafe = {
    id: "tjonnas" | "norma" | "norvald"
    title: string
    ingress: string
    imageUrl: string
  }
  
  const fakeDataBase: Cafe[] = [
    {
      id: "tjonnas",
      title: "Tjønnås Delikatesser",
      ingress: "En lun kafé midt i hjertet av campus. Her får du håndbrygget kaffe, ferske bakverk og ekte mat laget med omtanke – perfekt for en pause mellom forelesninger eller et rolig møte med gode venner.",
      imageUrl: "/images/241A9065.jpg"
    },
    {
      id: "norma",
      title: "Norma",
      ingress: "En lun kafé midt i hjertet av campus. Her får du håndbrygget kaffe, ferske bakverk og ekte mat laget med omtanke – perfekt for en pause mellom forelesninger eller et rolig møte med gode venner.",
      imageUrl: "/images/241A9065.jpg"
    },
    {
      id: "norvald",
      title: "Norvald",
      ingress: "En lun kafé midt i hjertet av campus. Her får du håndbrygget kaffe, ferske bakverk og ekte mat laget med omtanke – perfekt for en pause mellom forelesninger eller et rolig møte med gode venner.",
      imageUrl: "/images/241A9065.jpg"
    }
  ]

export default function About() {
  return (
    <div className="flex relative justify-start items-center flex-col px-6 py-14 gap-8">
        <div className='w-[calc(100%+100px)] opacity-20 right-4 top-96 rounded-tr-full -rotate-16 -z-10 absolute h-36 bg-yellow-100'></div>
        <section className='flex flex-col items-center gap-4 max-w-[392px]'>
          <Tag variant='tjonnas' textStyle='subheadline' content='tre konsepter, èn visjon' />
          <Text variant='headline' content='Hvem er Tjønnås?' as='h2' />
          <Text variant='primaryCenter' content='Tjønnås er paraplyen som samler Tjønnås Delikatesser, kaféen Norma og kaffebaren Norvald – alle knyttet sammen av Mari-Mette sin lidenskap for smak, kvalitet og gode møteplasser. Ett hjerte, tre uttrykk.' as='p' />
        </section>
        {fakeDataBase.map((cafe) => {
            const {id, title, ingress, imageUrl} = cafe
            return (
              <VerticalAccordionCard key={id} id={id} title={title} ingress={ingress} imageUrl={imageUrl}/>
            )
          })
            }
    </div>
  )
}
