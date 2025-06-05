import Search from '@/components/ui/Search'
import React, { Suspense } from 'react'
import Productlist from "@/components/ui/Productlist"
import { CardSkeleton, CardsSkeleton } from '@/components/ui/Skeletons';


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
      <div className="flex flex-col gap-7 px-6 py-6">
        <Suspense key={query} fallback={<CardsSkeleton />}>
          <Productlist query={query} />
        </Suspense>
      </div>
    </div>
  )

}

// 1. Send query inn i productlisten
// 2. Bruk query i en funksjon som fetcher data fra Sanity
// 3. Returnert data bruker vi i en map som returnerer horisontale kort med dataen
