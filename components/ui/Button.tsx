import React from 'react'

export function Button({text, variant}) {
  const variants = {
    primary: 'bg-red-500',
    secondary: 'bg-blue-500'
  }

  return (
    <div>
      <h2 className={variants[variant]}>{text}</h2>
    </div>
  )
}
