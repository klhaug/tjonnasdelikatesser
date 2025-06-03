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
    <div className=' bg-grey-500 flex flex-col gap-6 pb-24 justify-center items-center'>
      <Image src="/images/Tjønnås logo med ikon-hvit.png" height={300} width={300} alt='tjonnas logo' />

      {/* KONTAKT */}
      <section className="px-6 flex flex-col gap-2 w-full">
        <div className="flex gap-1">
          <Image src="/icons/Group.svg" height={24} width={24} alt='icon' />
          <Text variant="primary" content="Kontakt" extraStyling="text-white text-xl" as="h3"/>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Image src="/icons/email.svg" height={24} width={24} alt='icon' />
            <Text variant="primary" content="hei@tjonnås.no" extraStyling="text-white" as="p"/>
          </div>
          <div className="flex">
            <Image src="/icons/phone.svg" height={24} width={24} alt='icon' />
            <Text variant="primary" content="+47 123 45 789" extraStyling="text-white" as="p"/>
          </div>
          <div className="flex">
            <Image src="/icons/Frame 329.svg" height={24} width={24} alt='icon' />
            <Text variant="primary" content="Storgata 3, 2815 Gjøvik" extraStyling="text-white" as="p"/>
          </div>
        </div>
        <hr className="text-gray-100 opacity-20"></hr>
      </section>

      {/* AAPNINGSTIDER*/}
      <section className="px-6 flex flex-col gap-2 w-full">
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
        <hr className="text-gray-100 opacity-20"></hr>
      </section>

      {/* SNARVEIER */}
      <section className="px-6 flex flex-col gap-2 w-full">
        <div className="flex gap-1">
          <Image src="/icons/Explore.svg" height={24} width={24} alt='icon' />
          <Text variant="primary" content="Snarveier" extraStyling="text-white text-xl" as="h3"/>
        </div>
        <div className="px-4">
         <Link href="/" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Tjønnås Delikatesser" as="p" extraStyling="text-white"/></Link>
         <Link href="/" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Norma" as="p" extraStyling="text-white"/></Link>
         <Link href="/" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Norvald" as="p" extraStyling="text-white"/></Link>
         <Link href="/" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Produkter" as="p" extraStyling="text-white"/></Link>
         <Link href="/" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Kontakt" as="p" extraStyling="text-white"/></Link>
         <Link href="/" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Menyer" as="p" extraStyling="text-white"/></Link>
         <Link href="/" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Facebook" as="p" extraStyling="text-white"/></Link>
         <Link href="/" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Instagram" as="p" extraStyling="text-white"/></Link>
         <Link href="/" className="hover:cursor-pointer hover:underline underline-offset-2 text-white"><Text variant="primary" content="Informasjonskapsler" as="p" extraStyling="text-white"/></Link>
        </div>
        <hr className="text-gray-100 opacity-20"></hr>
      </section>
    </div>
  )
}
