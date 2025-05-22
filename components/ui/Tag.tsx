import React from 'react'
import Text from './Text'
import { allVariants } from './Text'

type TagProps = {
    variant: "tjonnas" | "norma" | "norvald"
    content: string
    textStyle: keyof typeof allVariants;
}

const variants = {
    tjonnas: "bg-yellow-300 flex items-center px-1 w-max rounded-sm" ,
    norma: "bg-red-100 flex items-center px-1 w-max rounded-sm" ,
    norvald: "bg-blue-100 flex items-center px-1 w-max rounded-sm"
}

export default function Tag({variant, textStyle, content}: TagProps): React.JSX.Element  {
    const className = variants[variant];
  
    return (
    <div className={className}>
        <Text variant={textStyle} content={content} as='p' />
    </div>
  )
}
