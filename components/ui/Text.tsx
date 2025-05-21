import React, { JSX } from 'react'

type Props = {
  variant: keyof typeof allVariants;
  content: string,
  as: keyof JSX.IntrinsicElements;
}

const allVariants = {
  hero: "text-[40px] leading-12",
  headline: "text-2xl leading-7 font-medium",
  subheadline: "text-sm uppercase",
  primary: "text-base",
  primaryBold: "text-base font-medium",
  primarySmall: "text-sm",
  captionLabel: "text-sm leading-[18px]",
}

export default function Text({variant, content, as = "p"}: Props): JSX.Element {
  const Component = as;
  const className = allVariants[variant];
      return (
          <Component className={className}>{content}</Component>
      );
}
