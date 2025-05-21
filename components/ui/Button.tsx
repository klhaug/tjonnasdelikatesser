import Link from 'next/link';
import React from 'react'

type ButtonProps = {
  text: string
  variant: keyof typeof variants
  href: string
}
 
const variants= {
  "primary-fill":     "text-base h-[44px] bg-yellow-300 flex justify-center items-center text-nowrap w-full hover:bg-yellow-350 hover:cursor-pointer h-11 rounded-lg pl-6 pr-6",
  "primary-fixed":    "text-base h-[44px] bg-yellow-300 flex justify-center items-center w-[300px] hover:bg-yellow-350 hover:cursor-pointer h-11 rounded-lg pl-6 pr-6",
  "secondary-fill":   "text-base h-[44px] bg-white flex justify-center items-center border text-nowrap w-full border-gray-500 text-black hover:bg-yellow-350 hover:border-yellow-350 hover:cursor-pointer h-11 rounded-lg pl-6 pr-6",
  "secondary-fixed":  "text-base h-[44px] bg-white flex justify-center items-center border w-[300px] border-gray-500 text-black hover:bg-yellow-350 hover:border-yellow-350 hover:cursor-pointer h-11 rounded-lg pl-6 pr-6",
  "tertiary-fill":    "text-base h-[44px] bg-white flex justify-start items-center w-full text-nowrap text-black  gap-3 items-center hover:text-shadow-sm justify-center hover:cursor-pointer transition group h-11 rounded-lg pl-6 pr-6",
  "tertiary-fixed":   "text-base h-[44px] bg-white flex justify-start items-center w-[300px] text-black justify-center gap-3 items-center hover:text-shadow-sm hover:cursor-pointer transition group h-11 rounded-lg pl-6 pr-6",
}

export default function Button({text, variant, href}: ButtonProps): React.JSX.Element {
  return (
    <div>
      <Link href={href} className={variants[variant]}>
        {text}
       {variant === "tertiary-fixed" || variant === "tertiary-fill" ? <svg className='transition group-hover:translate-x-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="black"/>
</svg> : null}
      </Link>
    </div>
  )
}
