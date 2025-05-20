import React, { JSX } from 'react'

type Props = {
  variant: keyof typeof allVariants;
  content: string,
  as?: keyof JSX.IntrinsicElements;
}

const allVariants = {
  hero: "text-4xl leading-12",
  headline: "text-2xl",
  primary: "bg-red-600",
  primaryBold: "font-bold"
}

export default function Text({variant, content, as = "p"}: Props) {
  const Component = as;
  const className = allVariants[variant];
      return (
          <Component className={className}>{content}</Component>
      );
}
