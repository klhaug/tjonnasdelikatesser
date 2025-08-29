import React from 'react'
import ContactForm from '../ui/ContactForm'
import Text from '../ui/Text'

const YourIcon = ({ className }: {className: string}) => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M19 9.42508C19 3.93508 14.74 0.205078 10 0.205078C5.31 0.205078 1 3.85508 1 9.48508C0.4 9.82508 0 10.4651 0 11.2051V13.2051C0 14.3051 0.9 15.2051 2 15.2051H3V9.10508C3 5.23508 6.13 2.10508 10 2.10508C13.87 2.10508 17 5.23508 17 9.10508V16.2051H9V18.2051H17C18.1 18.2051 19 17.3051 19 16.2051V14.9851C19.59 14.6751 20 14.0651 20 13.3451V11.0451C20 10.3451 19.59 9.73508 19 9.42508Z" fill="currentColor" />
    <path d="M7 11.2051C7.55228 11.2051 8 10.7574 8 10.2051C8 9.65279 7.55228 9.20508 7 9.20508C6.44772 9.20508 6 9.65279 6 10.2051C6 10.7574 6.44772 11.2051 7 11.2051Z" fill="currentColor" />
    <path d="M13 11.2051C13.5523 11.2051 14 10.7574 14 10.2051C14 9.65279 13.5523 9.20508 13 9.20508C12.4477 9.20508 12 9.65279 12 10.2051C12 10.7574 12.4477 11.2051 13 11.2051Z" fill="currentColor" />
    <path d="M16 8.23508C15.52 5.38508 13.04 3.20508 10.05 3.20508C7.01997 3.20508 3.75997 5.71508 4.01997 9.65508C6.48997 8.64508 8.34997 6.44508 8.87997 3.76508C10.19 6.39508 12.88 8.20508 16 8.23508Z" fill="currentColor" />
  </svg>
);

const MailIcon = ({ className }: {className: string}) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18.6667 8.20492C18.6667 7.47158 18.0667 6.87158 17.3334 6.87158H6.66671C5.93337 6.87158 5.33337 7.47158 5.33337 8.20492V16.2049C5.33337 16.9382 5.93337 17.5382 6.66671 17.5382H17.3334C18.0667 17.5382 18.6667 16.9382 18.6667 16.2049V8.20492ZM17.3334 8.20492L12 11.5382L6.66671 8.20492H17.3334ZM17.3334 16.2049H6.66671V9.53825L12 12.8716L17.3334 9.53825V16.2049Z"
      fill="currentColor"
    />
  </svg>
);

const PhoneIcon = ({ className }: {className: string}) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8.36 7.53841C8.4 8.13174 8.5 8.71175 8.66 9.26508L7.86 10.0651C7.58667 9.26508 7.41333 8.41841 7.35333 7.53841H8.36ZM14.9333 15.5517C15.5 15.7117 16.08 15.8117 16.6667 15.8517V16.8451C15.7867 16.7851 14.94 16.6117 14.1333 16.3451L14.9333 15.5517ZM9 6.20508H6.66667C6.3 6.20508 6 6.50508 6 6.87174C6 13.1317 11.0733 18.2051 17.3333 18.2051C17.7 18.2051 18 17.9051 18 17.5384V15.2117C18 14.8451 17.7 14.5451 17.3333 14.5451C16.5067 14.5451 15.7 14.4117 14.9533 14.1651C14.8867 14.1384 14.8133 14.1317 14.7467 14.1317C14.5733 14.1317 14.4067 14.1984 14.2733 14.3251L12.8067 15.7917C10.92 14.8251 9.37333 13.2851 8.41333 11.3984L9.88 9.93175C10.0667 9.74508 10.12 9.48508 10.0467 9.25174C9.8 8.50508 9.66667 7.70508 9.66667 6.87174C9.66667 6.50508 9.36667 6.20508 9 6.20508Z"
      fill="currentColor"
    />
  </svg>
);

const LocationIcon = ({ className }: {className: string}) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11.6667 5.53857C9.08667 5.53857 7 7.62524 7 10.2052C7 13.7052 11.6667 18.8719 11.6667 18.8719C11.6667 18.8719 16.3333 13.7052 16.3333 10.2052C16.3333 7.62524 14.2467 5.53857 11.6667 5.53857ZM8.33333 10.2052C8.33333 8.36524 9.82667 6.87191 11.6667 6.87191C13.5067 6.87191 15 8.36524 15 10.2052C15 12.1252 13.08 14.9986 11.6667 16.7919C10.28 15.0119 8.33333 12.1052 8.33333 10.2052Z"
      fill="currentColor"
    />
    <path
      d="M12 11.8719C12.9205 11.8719 13.6667 11.1257 13.6667 10.2052C13.6667 9.28477 12.9205 8.53857 12 8.53857C11.0796 8.53857 10.3334 9.28477 10.3334 10.2052C10.3334 11.1257 11.0796 11.8719 12 11.8719Z"
      fill="currentColor"
    />
  </svg>
);






export default function Contact() {
  return (
    <div className='w-full md:bg-white'>
      <div className='flex flex-row pb-23 max-w-[796px] m-auto md:pt-22 items-start  gap-12 justify-center w-full'>
          <div className='flex flex-col'>
            <div className='w-full bg-white -z-10 flex flex-col items-center justify-end relative h-[135px] md:hidden'>
                <div className='bg-yellow-300 h-3/5 rounded-tr-full -z-10 absolute bottom-0 w-full'></div>
                <div className='h-3/5 flex flex-col items-start w-full  justify-center gap-1 px-7'>
                    <Text variant='subheadline' content='Ta kontakt' extraStyling='bg-yellow-100 w-fit px-2 rounded-sm' as='p' />
                    <Text variant='headline' extraStyling='' content='Vi hører gjerne fra deg!' as='h2' />
                </div>
            </div>
                <div className='hidden md:flex flex-col w-[576px] px-7 gap-4'>
                  <Text variant='subheadline' content='Ta kontakt' extraStyling='bg-yellow-100 w-fit px-2 rounded-sm' as='p' />
                  <Text variant='headline' extraStyling='' content='Vi hører gjerne fra deg!' as='h2' />
                </div>
                    <Text variant='primary' extraStyling='text-grey-500 px-7 my-4 max-w-[576px]' content='Ønsker du tilbud på catering, gavepakker eller noe annet? Fyll ut skjemaet nedenfor, så tar vi kontakt med deg.' as='p' />
                  <ContactForm />
          </div>
        <section className="hidden lg:flex flex-col mt-[144px] justify-start gap-4 w-full lg:order-4">
            <div className="flex gap-1 items-center">
              <YourIcon className="text-black" />
              <Text variant="primary" content="Kontakt" extraStyling="text-black text-xl" as="h3"/>
            </div>
            <div className="flex gap-2 flex-col">
              <div className="flex">
                <MailIcon className='text-black' />
                <Text variant="primary" content="hei@tjonnas.com" extraStyling="text-black" as="p"/>
              </div>
              <div className="flex">
                <PhoneIcon className='text-black' />
                <Text variant="primary" content="+47 467 00 669 - Tjønnås" extraStyling="text-black" as="p"/>
              </div>
              <div className="flex">
                <PhoneIcon className='text-black' />
                <Text variant="primary" content="+47 488 54 554 - Norvald" extraStyling="text-black" as="p"/>
              </div>
              <div className="flex">
                <LocationIcon className='text-black' />
                <Text variant="primary" content="Storgata 3, 2815 Gjøvik" extraStyling="text-black" as="p"/>
              </div>
            </div>
            <hr className="text-gray-100 md:hidden opacity-20"></hr>
          </section>
      </div>
    </div>
  )
}
