import Image from 'next/image'
import React from 'react'
import Button from './Button';
import Text from './Text';
import Tag from './Tag';

type Props = {
    id: "tjonnasdelikatesser" | "norma" | "norvald",
    title: string,
    ingress: string
    imageUrl: string
    indexNumber: number
}


export default function HorisontalAboutCard({id, title, ingress, imageUrl, indexNumber}: Props) {

    if(!id  || !title || !ingress || !imageUrl ) {
        return undefined;
    }

  return (
    <article className='hidden md:flex justify-center p-6 gap-4'>
          {indexNumber === 0 || indexNumber % 2 === 0 ? ( 
                <div>
                    <Image className='h-full object-cover rounded-md' src={imageUrl} height={420} width={420} alt={title} />
                </div>
        ) : null}
        <section className='p-6 flex flex-col gap-4 justify-between'>
            <div className='flex flex-col gap-2'>
                <Tag
                    variant={id}
                    textStyle='primarySmall'
                    content='Butikk' />
                <Text
                    variant='headline'
                    content='Tjønnås Delikatesser'
                    as='h2' />
                <Text
                    variant='primary'
                    content='En lun kafé midt i hjertet av campus. Her får du håndbrygget kaffe, ferske bakverk og ekte mat laget med omtanke – perfekt for en pause mellom forelesninger eller et rolig møte med gode venner.'
                    extraStyling='max-w-[400px]'
                    as='h2' />
            </div>
            <Button text='Les mer' variant='tertiary-fixed' href={`/about/${id}`}/>
        </section>

        {indexNumber > 0 && indexNumber % 2 !== 0 ? ( 
               <div>
               <Image className='h-full object-cover rounded-md' src={imageUrl} height={420} width={420} alt={title} />
             </div>
        ): null } 

    </article>
  )
}
