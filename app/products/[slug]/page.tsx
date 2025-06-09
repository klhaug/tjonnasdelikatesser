import Breadcrumbs from '@/components/ui/Breadcrumbs';
//DENNE SKAL IKKE VÆRE CLIENT... MIDLERTIDIG FOR RENDERING AV PATHNAMEGØY

import React from 'react'

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Page(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const searchParams = await props.searchParams
  const slug = params.slug
  const query = searchParams.query

  
return(
    <div>
        <Breadcrumbs breadcrumbs={[
          { label: 'Forsiden', href: '/' },
          { label: 'Produkter', href: '/products' },
          {
            label:`${slug}`,
            href: `/dashboard/invoices/${slug}`,
            active: true,
          },
        ]} />
    </div>
  )
}