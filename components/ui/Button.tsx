import React from 'react'

type ButtonProps = {
  text: string,
  variant: keyof typeof variants;
}
 
const variants= {
  primary: 'bg-yellow-300 hover:bg-yellow-350 hover:cursor-pointer h-11 rounded-lg pl-6 pr-6',
  secondary: "bg-white border border-gray-500 text-black hover:bg-yellow-350 hover:border-yellow-350 hover:cursor-pointer h-11 rounded-lg pl-6 pr-6",
  tertiary: "bg-white flex text-black justify-center gap-3 items-center hover:font-medium hover:cursor-pointer transition group h-11 rounded-lg pl-6 pr-6",
}

export default function Button({text, variant}: ButtonProps): React.JSX.Element {
  return (
    <div>
      <button className={variants[variant]}>
        {text}
       {variant === "tertiary" ? <svg className='transition group-hover:translate-x-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="black"/>
</svg> : null}
      </button>
    </div>
  )
}
