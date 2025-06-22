import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className='h-screen flex flex-col justify-center p-4 items-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
          <Image src='/icons/succcessicon.svg' height={120} width={120} alt='icon'/>
          <h1 className='text-green-500 text-2xl font-medium text-center'>Innsending av skjema var vellykket!</h1>
        <p className='text-center'> Vi har mottatt henvendelsen din og tar kontakt med deg snart.</p>
        <Link href="/" className='text-blue-700'>Tilbake</Link>
      </div>
    </div>
  )
}
