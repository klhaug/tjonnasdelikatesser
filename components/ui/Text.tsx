import React from 'react'

type Props = {
  variant: keyof typeof allVariants;
  content: string,
}

const allVariants = {
  hero: "text-4xl leading-12",
  headline: "text-2xl",
  primary: "bg-red-600",
  primaryBold: "font-bold"
}

export default function Text({variant, content}: Props) {
        return (
          <>
            <h1 className={`${allVariants[variant]}`}>{content}</h1>
          </>  
        )

}
