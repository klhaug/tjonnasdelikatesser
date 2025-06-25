import React from 'react'
import Button from '../ui/Button';
import Image from 'next/image';
import Text from '../ui/Text';

export default function DesktopHero() {
  return (
    <div className='h-[700px] hidden bg-gradient-image lg:flex flex-col items-center justify-end'>
      <div className='py-20 flex flex-col items-center gap-4'>
        <div className='flex flex-col max-w-2/3 gap-4'>
          <Image src="/images/Tjønnås_Logo-hvit 1.svg" alt='tjonnas icon' height={90} width={600} />
          <Text variant='primary' content="Delikatesser laget med lidenskap, lokale råvarer og respekt for tradisjon." extraStyling='text-white text-center' as={'p'} />
        </div>
        <div className='flex gap-8'>
            <Button text={'Les mer'} variant={'primary-fixed'} href={'/about/tjonnasdelikatesser'} />
            <Button text={'Se meny'} variant={'secondary-fixed'} href={'/menu'} />
        </div>
      </div>
    </div>
  )
}
