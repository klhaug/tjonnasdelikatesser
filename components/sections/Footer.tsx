import ToggleDropdown from "../ui/ToggleDropdown"
import Image from 'next/image'
import Text from '../ui/Text';
import Link from "next/link";


const cafeInfo = [
  {
    name: "Tjønnås Delikatesser",
    openingHours: [
      "Man-Fre", "07:00-16:00",
      "Lørdag", "10:00-13:00",
      "Søndag", "07:00-16:00",
    ]
  },
  {
    name: "Norma",
    openingHours: [
      "Man-Fre", "07:00-16:00",
      "Lørdag", "10:00-13:00",
      "Søndag", "07:00-16:00",
    ]
  },
  {
    name: "Norvald",
    openingHours: [
      "Man-Fre", "07:00-16:00",
      "Lørdag", "10:00-13:00",
      "Søndag", "07:00-16:00",
    ]
  },
]


export default function Footer() {


  return (
    <div className="w-full bg-grey-500">
      <div className=' bg-grey-500 m-auto flex flex-col h-auto lg:flex-row py-6 px-6 lg:py-24 lg:px-20 lg:grid lg:grid-cols-4 lg:items-start lg:max-w-[1440px] gap-8 lg:gap-14 pb-24 justify-center items-center'>
          <div className="flex gap-8 flex-col items-center  lg:order-1">
            <Image src="/images/tjonnas-full-logo-white-cropped.svg" height={140} width={140} alt='tjonnas logo' />
            <Text variant="primarySmall" content="Tjønnås er paraplyen som samler Tjønnås Delikatesser, kaféen Norma og kaffebaren Norvald – alle knyttet sammen av Mari-Mette sin lidenskap for smak, kvalitet og gode møteplasser. Ett hjerte, tre uttrykk." extraStyling="text-white hidden lg:block" as="p"/>
          </div>
        {/* KONTAKT */}
        <section className=" flex flex-col gap-2 w-full lg:order-4">
          <div className="flex gap-1">
            <Image src="/icons/Group.svg" height={24} width={24} alt='icon' />
            <Text variant="primary" content="Kontakt" extraStyling="text-white text-xl" as="h3"/>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <Image src="/icons/Email.svg" height={24} width={24} alt='icon' />
              <Text variant="primary" content="hei@tjonnås.no" extraStyling="text-white" as="p"/>
            </div>
            <div className="flex">
              <Image src="/icons/Phone.svg" height={24} width={24} alt='icon' />
              <Text variant="primary" content="+47 123 45 789" extraStyling="text-white" as="p"/>
            </div>
            <div className="flex">
              <Image src="/icons/Frame 329.svg" height={24} width={24} alt='icon' />
              <Text variant="primary" content="Storgata 3, 2815 Gjøvik" extraStyling="text-white" as="p"/>
            </div>
          </div>
          <hr className="text-gray-100 lg:hidden opacity-20"></hr>
        </section>
        {/* AAPNINGSTIDER*/}
        <section className=" flex flex-col gap-2 w-full lg:order-3">
          <div className="flex gap-1">
            <Image src="/icons/Access time.svg" height={24} width={24} alt='icon' />
            <Text variant="primary" content="Åpningstider" extraStyling="text-white text-xl" as="h3"/>
          </div>
          <div>
            {cafeInfo.map((cafe) => {
              const {name, openingHours} = cafe;
              return (
                <ToggleDropdown key={name} name={name} openingHours={openingHours} />
              )
            })}
          </div>
          <hr className="text-gray-100 opacity-20 lg:hidden"></hr>
        </section>
        {/* SNARVEIER */}
        <section className=" flex flex-col gap-2 lg:order-2 w-full">
          <div className="flex gap-1">
            <Image src="/icons/Explore.svg" height={24} width={24} alt='icon' />
            <Text variant="primary" content="Snarveier" extraStyling="text-white text-xl" as="h3"/>
          </div>
          <div className="px-4">
           <Link href="/about/tjonnasdelikatesser" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Tjønnås Delikatesser" as="p" extraStyling="text-white"/></Link>
           <Link href="/about/norma" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Norma" as="p" extraStyling="text-white"/></Link>
           <Link href="/about/norvald" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Norvald" as="p" extraStyling="text-white"/></Link>
           <Link href="/products" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Produkter" as="p" extraStyling="text-white"/></Link>
           <Link href="/contact" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Kontakt" as="p" extraStyling="text-white"/></Link>
           <Link href="/menu" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Menyer" as="p" extraStyling="text-white"/></Link>
           <Link href="/" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Facebook" as="p" extraStyling="text-white"/></Link>
           <Link href="/" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Instagram" as="p" extraStyling="text-white"/></Link>
           <Link href="/" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Informasjonskapsler" as="p" extraStyling="text-white"/></Link>
          </div>
          <hr className="text-gray-100 opacity-20 lg:hidden"></hr>
        </section>
      </div>
    </div>
  )
}
