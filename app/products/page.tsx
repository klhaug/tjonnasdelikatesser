
import Search from '@/components/ui/Search'
import React, { Suspense } from 'react'
import Productlist from "@/components/ui/Productlist"
import MobileFilter from "@/components/ui/MobileFilter"
import {CardsSkeleton } from '@/components/ui/Skeletons';
import Text from '@/components/ui/Text';
import LoadMoreButton from '@/components/ui/LoadMoreButton';


export default async function Page(props: {



  searchParams?: Promise<{
    query?: string;
    limit?: number
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const limit = searchParams?.limit || 10;
  // const currentPage = Number(searchParams?.page) || 1;
  // const totalPages = await fetchInvoicesPages(query);

  const resultsNumber = 192;

  return(

    <div>
      <div className='flex flex-col justify-center items-center border-b border-grey-100 gap-4 py-8 px-6'>
        <Text content='Produkter' variant='headline' as='h1'/>
        <div className='w-full'>
          <Search placeholder='Søk blant våre produkter' />
        </div>
      </div>
      <MobileFilter resultsNumber={resultsNumber} />
      <div className="flex flex-col gap-7 px-6 py-6">
        <Suspense key={query} fallback={<CardsSkeleton />}>
          <Productlist query={query} limit={limit} />
        </Suspense>
        <LoadMoreButton />
      </div>
    </div>
  )

}

// 1. Send query inn i productlisten
// 2. Bruk query i en funksjon som fetcher data fra Sanity
// 3. Returnert data bruker vi i en map som returnerer horisontale kort med dataen
