import ClientWrapper from "@/components/ui/ClientWrapper"
import Breadcrumbs from "@/components/ui/Breadcrumbs"
import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity"
import { sanityFetch } from "@/sanity/live"
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { notFound } from "next/navigation";





const PRODUCT_QUERY = defineQuery(`*[_type=="productItem"]`);




export default async function Page() {

  const { data: products } = await sanityFetch({
    query: PRODUCT_QUERY,
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
          <ClientWrapper products={products} />
    </div>
  )
}

