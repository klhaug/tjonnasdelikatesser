import ClientWrapper from "@/components/ui/ClientWrapper"
import Breadcrumbs from "@/components/ui/Breadcrumbs"
import { defineQuery } from "next-sanity"
import { sanityFetch } from "@/sanity/live"
import { notFound } from "next/navigation";
import { Suspense } from "react";


const PRODUCTS_QUERY = defineQuery(`*[_type=="productItem"]`);


export default async function Page() {

  const { data: products } = await sanityFetch({
    query: PRODUCTS_QUERY,
  });
  if (!products) {
    notFound();
  }
  
  
  return(
    <div>
          <Breadcrumbs breadcrumbs={[
          { label: 'Forsiden', href: '/' },
          {
            label: 'Produkter',
            href: '/products',
            active: true,
          },
        ]} />
        
  {/* Wrappet i Suspense fordi Clientwrapper bruker useSearchParams og Next ønsket det  */}

          <Suspense>
            <ClientWrapper products={products} /> 
            {/* 🚨 Til Erik: Er dette en dum måte å gjøre det på? Altså ha en server-komponent på toppen, for så å wrappe omtrent alt i en egen client-komponent for å ha tilgang på state?*/}
          </Suspense>
    </div>
  )
}

