import React from 'react'
import Text from './Text'

type TagProps = {
    variant: "tjonnas" | "norma" | "norvald"
    text: string
}

const variants = {
    tjonnas: "bg-yellow-300 flex items-center px-1 w-max rounded-sm" ,
    norma: "bg-red-100 flex items-center px-1 w-max rounded-sm" ,
    norvald: "bg-blue-100 flex items-center px-1 w-max rounded-sm"
}

export default function Tag({variant, text}: TagProps): React.JSX.Element  {
    const className = variants[variant];
  
    return (
    <div className={className}>
        <Text variant='captionLabel' content={text} as='p' />
    </div>
  )
}
