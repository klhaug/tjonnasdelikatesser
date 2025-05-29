import Image from 'next/image'
import React from 'react'
import Text from './Text'

type Props = {
    id: "tjonnas" | "norma" | "norvald"
    account: string
    date: string
    post: string
    imageUrl: string
}

export default function SoMeCard({id, account, date, post, imageUrl}: Props) {
    const styles = {
        tjonnas: "border-yellow-300",
        norma: "border-red-300",
        norvald: "border-blue-300"
    }
  return (
    <div className={`${styles[id]} border-2 rounded-lg max-w-[540px]`}>
        <div className='flex flex-col  p-4 gap-4'>
            <div className='flex gap-4 '>
                <div className='h-[44px] w-[44px] rounded-full'>
                    <Image src="/images/241A9090 2.png" className='object-none rounded-full object-[36%_36%]' height={100} width={100} alt='profile-pic' />
                </div>
                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col'>
                            <Text content={account} variant='primary'  as='p' />
                            <Text content={date} extraStyling='text-grey-300' variant='primarySmall'  as='p' />
                        </div>
                        <Image src="/icons/instagramsd 1.svg" width={33} height={33} alt='icon' />
                    </div>
                </div>
                <Text content={post} variant='primary'  as='p' />
        </div>
        <Image className='rounded-b-lg' src={imageUrl} width={540} height={540} alt='foodd' />
    </div>
  )
}
