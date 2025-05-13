import React from 'react'

type ButtonProps = {
  text: string,
  variant: number
}

export function Button({text, variant}: ButtonProps) {
  const variants = {
    1: "bg-yellow-700",
    2: "bg-yellow-500",
    3: "bg-yellow-350",
    4: "bg-yellow-300",
    5: "bg-yellow-100",
  }

  const selectedVariant = variants[variant]

  return (
    <div>
      <h2 className={`${selectedVariant}`}>{text}</h2>
    </div>
  )
}
