import React from 'react'

type ButtonProps = {
  text: string,
  variant: keyof typeof variants;
}
 
const variants= {
  primary: "bg-yellow-700",
  secondary: "bg-yellow-500",
  tertiary: "bg-yellow-350",
}

export default function Button({text, variant}: ButtonProps) {
  return (
    <div>
      <h2 className={`${variants[variant]}`}>{text}</h2>
    </div>
  )
}
