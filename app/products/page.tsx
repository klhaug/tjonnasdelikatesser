import Search from '@/components/ui/Search'
import React from 'react'
import Productlist from "@/components/ui/Productlist"


export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;
  // const totalPages = await fetchInvoicesPages(query);
console.log(query)
  return(
    <div>
      <Search placeholder='Søk etter...' />
      <Productlist query={query} />
    </div>
  )

}

// 1. Send query inn i productlisten
// 2. Bruk query i en funksjon som fetcher data fra Sanity
// 3. Returnert data bruker vi i en map som returnerer horisontale kort med dataen
