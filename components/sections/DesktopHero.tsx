import React from 'react'
import Button from '../ui/Button';
import Image from 'next/image';

export default function DesktopHero() {
  return (
    <div className='relative'>
        <Image  src="/images/241A8984.jpg" alt={''} width={1440} height={669} /> 
      <div className='flex gap-8'>
          <Button text={'Les mer'} variant={'primary-fixed'} href={'/about/tjonnasdelikatesser'} />
          <Button text={'Se meny'} variant={'secondary-fixed'} href={'/menu'} />
      </div>
    </div>
  )
}
