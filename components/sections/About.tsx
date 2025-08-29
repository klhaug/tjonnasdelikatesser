import React from 'react'
import VerticalAccordionCard from '../ui/VerticalAccordionCard'
import Tag from '../ui/Tag'
import Text from '../ui/Text'
import HorisontalAboutCard from '../ui/HorisontalAboutCard'

type Cafe = {
    id: "tjonnasdelikatesser" | "norma" | "norvald"
    title: string
    ingress: string
    imageUrl: string
    category: string
  }
  
  const fakeDataBase: Cafe[] = [
    {
      id: "tjonnasdelikatesser",
      title: "Tjønnås Delikatesser",
      ingress: "Tjønnås Delikatesser ligger i gågata på Gjøvik og byr på håndplukkede smaker fra både inn- og utland. Her finner du oster, spekemat, oljer og søtsaker av høy kvalitet – perfekte gaver eller noe ekstra godt til helgen. En butikk for deg som setter pris på ekte matopplevelser i hverdagen.",
      imageUrl: "/images/TjonnasAboutResized.webp",
      category: "Delikatessebutikk"
    },
    {
      id: "norma",
      title: "Norma",
      ingress: "En unik nisjebutikk på vakre Gjøvik gård. Holder sesongåpent om sommeren. Vi fyller hyllene med håndplukkede varer av høy kvalitet til deg og hjemmet. Her finner du gaver til deg selv, og de du bryr deg om. Velkommen innom for en titt. ",
      imageUrl: "/images/NormaAboutResized.webp",
      category: "Gavebutikk"
    },
    {
      id: "norvald",
      title: "Norvald",
      ingress: "En lun kafé midt i hjertet av Gjøvik Gård for studenter og alle andre. Her får du nybrygget kaffe, ferske bakverk og ekte mat laget med omtanke – perfekt for en pause i hverdagen eller et rolig møte med gode venner.",
      imageUrl: "/images/NorvaldAboutImageRezised2.webp",
      category: "Kafe og vinbar"
    }
  ]

 
export default async function About() {
 

  return (
    <div className="flex relative justify-start items-center flex-col px-6 py-14 md:py-24 gap-8 md:gap-14">
        <div className='w-[calc(100%+100px)] opacity-20 right-4 top-96 rounded-tr-full -rotate-16 -z-10 absolute h-36 bg-yellow-100'></div>
        <section className='flex flex-col items-center gap-4 max-w-[392px] md:max-w-[540px]'>
          <Tag 
            variant='tjonnasdelikatesser' 
            textStyle='subheadline' 
            content='tre konsepter, èn visjon' />
          <Text 
            variant='headline' 
            content='Hvem er Tjønnås?' 
            as='h2' />
          <Text 
            variant='primaryCenter' 
            content='Tjønnås er paraplyen som samler Tjønnås Delikatesser, gavebutikken Norma og Norvald Kafe og vinbar – alle knyttet sammen av Mari-Mette sin lidenskap for smak, kvalitet og gode møteplasser. Ett hjerte, tre uttrykk.' 
            as='p' />
        </section>
        <div className='md:hidden flex flex-col w-full gap-4 items-center'>
          {fakeDataBase.map((cafe) => {
              const {id, title, ingress, imageUrl, category} = cafe
              return (
                <VerticalAccordionCard key={id} id={id} title={title} category={category} ingress={ingress} imageUrl={imageUrl}/>
              )
            })
              }
        </div>
        <div className='hidden md:flex flex-col w-full gap-14 items-center'>
          {fakeDataBase.map((cafe, index) => {
              const {id, title, ingress, imageUrl, category} = cafe
              return (
                <HorisontalAboutCard key={id} id={id} indexNumber={index} category={category} title={title} ingress={ingress} imageUrl={imageUrl}/>
              )
            })
              }
        </div>
      
    </div>
  )
}
