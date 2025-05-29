import React from 'react'
import ContactForm from '../ui/ContactForm'
import Text from '../ui/Text'

export default function Contact() {
  return (
    <div className='flex flex-col pb-23 items-center justify-center w-full'>
        <div className='w-full bg-white -z-100 flex flex-col items-center justify-end relative h-[135px]'>
            <div className='bg-yellow-300 h-3/5 rounded-tr-full -z-10 absolute bottom-0 w-full'></div>
            <div className='h-3/5 flex flex-col items-start w-full max-w-[576px] justify-center gap-1 px-7'>
                <Text variant='subheadline' content='Ta kontakt' extraStyling='bg-yellow-100 w-fit px-2 rounded-sm' as='p' />
                <Text variant='headline' extraStyling='' content='Vi hører gjerne fra deg!' as='h2' />
            </div>
        </div>  
                <Text variant='primary' extraStyling='text-grey-500 px-7 my-4 max-w-[576px]' content='Ønsker du tilbud på catering, gavepakker eller noe annet? Fyll ut skjemaet nedenfor, så tar vi kontakt med deg.' as='p' />
      <ContactForm />
    </div>
  )
}
