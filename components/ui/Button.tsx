import React from 'react'

type ButtonProps = {
  text: string,
  variant: keyof typeof variants;
}
 
const variants= {
  primary: 'bg-yellow-300 hover:bg-yellow-350 hover:cursor-pointer h-11 rounded-lg pl-6 pr-6',
  secondary: "bg-white border border-gray-500 text-black hover:bg-grey-100 hover:cursor-pointer h-11 rounded-lg pl-6 pr-6",
  tertiary: "bg-white text-black hover:font-semibold hover:cursor-pointer h-11 rounded-lg pl-6 pr-6",
}

export default function Button({text, variant}: ButtonProps) {
  return (
    <div>
      <button className={variants[variant]}>{text}</button>
    </div>
  )
}
