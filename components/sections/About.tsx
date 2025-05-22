import React from 'react'
import VerticalAccordionCard from '../ui/VerticalAccordionCard'
import Tag from '../ui/Tag'

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
      title: "Tjønnås ",
      ingress: "En lun kafé midt i hjertet av campus. Her får du håndbrygget kaffe, ferske bakverk og ekte mat laget med omtanke – perfekt for en pause mellom forelesninger eller et rolig møte med gode venner.",
      imageUrl: "/images/241A9065.jpg"
    },
  ]

export default function About() {
  return (
    <div className="flex justify-evenly items-center flex-col gap-5">
        <Tag variant='tjonnas' text='tre konsepter, èn visjon' />
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
