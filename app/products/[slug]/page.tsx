'use client'

//DENNE SKAL IKKE VÆRE CLIENT... MIDLERTIDIG FOR RENDERING AV PATHNAMEGØY

import { usePathname } from 'next/navigation';
import React from 'react'

export default  function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {

  const pathname = usePathname();

  
return(
    <div>
      <h1>{pathname}</h1>
    </div>
  )
}