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
    category: string
}


export default function HorisontalAboutCard({id, title, ingress, imageUrl, indexNumber, category}: Props) {

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
                    content={category} />
                <Text
                    variant='headline'
                    content={title}
                    as='h2' />
                <Text
                    variant='primary'
                    content={ingress}
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
