import React from 'react'
import TestimonialCard from '../ui/TestimonialCard'

export default function Testimonials() {
  return (
    <div className='py-14 flex bg-linear-150  justify-center from-[#FEFBF2] to-[#FFD5C3]'>
      <div className='grid grid-cols-1 lg:grid-cols-3 px-6 md:px-12 gap-8 max-w-[1440px]'>
        <div className='hidden lg:block'>
          <TestimonialCard image="/images/IMG_0469.JPEG" quote='"Jeg har fulgt Tjønnås Delikatesser fra dag èn, og det er blitt en selvfølge å legge turen innom, spesielt før helgehandelen. Her blir jeg møtt med ekte vennlighet, og råvarene har en kvalitet som gjør at smaksløkene jubler - ja, de danser rett og slett fandango!"'/>
        </div> 
        <div>
          <TestimonialCard image="/images/IMG_1523.webp" quote='"Liker å gå til Tjønnås når jeg vil ha noe ekstra godt. Koselige folk som har gode ideer til en hyggelig kveld. Setter så pris på en slik butikk i byen"' />
        </div>
        {/* Apnes når vi har flere testimonials */}
         <div className='hidden lg:block'>
          <TestimonialCard image="/images/IMG_6244.JPEG" quote='"Norvald er noe av det som gjør Gjøvik til et koselig sted å bo. Ikke bare er det digg mat som skiller seg litt ut, det er et sånt sted hvor du føler deg velkommen når du kommer. Det er sånt vi må verne om."'/>
        </div> 
      </div>
    </div>
  )
}
