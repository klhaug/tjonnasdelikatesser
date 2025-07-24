'use client'

import Search from '@/components/ui/Search'
import MobileFilter from "@/components/ui/MobileFilter"
import DesktopFilter from "@/components/ui/DesktopFilter"
import Text from '@/components/ui/Text';
import LoadMoreButton from '@/components/ui/LoadMoreButton';
import Productlist from './Productlist';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {PRODUCTS_QUERYResult} from '@/sanity/types'



export default function ClientWrapper({products}: {products: PRODUCTS_QUERYResult}) {
// Her har jeg valgt å ha en egen overordnet klient-komponent for å ha tilgang på state slik at jeg kan sende den videre ned i de forskjellige komponentene som filteret og produktlisten
// 🚨 Til Erik: Nå skjønte jeg endelig hva du mente med "Shadow State", tror jeg. Altså ha en egen state som er den samme som URL-en, men at filtreringen baserer seg på staten i stedet for URL-en,
// slik at det er kjappere. 

// 🚨 Hva har jeg tenkt? 

 const [filter, setFilter] = useState("");
 const [query, setQuery] = useState("");
 const [priceMinMax, setPriceMinMax] = useState([0, 2000])
 const [shadowPriceMinMax, setShadowPriceMinMax] = useState<number[]>([])
 const [hasHydrated, setHasHydrated] = useState(false);
 const [listLength, setListLength] = useState(10)
 
 const searchParams = useSearchParams();
 const getFilter = searchParams.get('filter')
 const getQuery = searchParams.get("query")
 const getPriceMin = searchParams.get("price_min")
 const getPriceMax = searchParams.get("price_max")
 //Bytt rekkefølge her, og bruk getFilter i staten til f.eks. priceMinMax
 //URL gjelder alltid


//Oppdaterer shadowstate dersom man laster siden med filter i URL-parameterne

  if(!hasHydrated) {
    if(getFilter !== null) {
        setFilter(getFilter);
    }
    if(getQuery !== null){
        setQuery(getQuery)
    }
    if(getPriceMin !== null && getPriceMax !== null){
        console.log(getPriceMin, getPriceMax)
        console.log("triggered")
        const getPriceMinMax = [parseFloat(getPriceMin), parseFloat(getPriceMax)]
        setPriceMinMax(getPriceMinMax)
        setShadowPriceMinMax(getPriceMinMax)
    }
    setHasHydrated(true)
  } 

// Hjelpefunksjoner

  const updateFilter = (input: string) => {
    console.log("Update filter", input)
    setFilter(input)
  }

  const updateQuery = (input: string) => {
    console.log("Update Query:", input)
    setQuery(input)
  }

  const updateSlider = (input: number[]) => {
    console.log("Update Slider:", input)
    setPriceMinMax(input)
  }

  const updateListLength = (input: number) => {
    const newListLength = input + 10;
    console.log("Listlength updated:", newListLength)
    setListLength(newListLength)
  }

// SORTING FUNCTIONS

  function sortByAscName(array: PRODUCTS_QUERYResult){

    array.sort((a, b) => {

      const nameA = a.productName ? a.productName.toUpperCase() : "" // ignore upper and lowercase
      const nameB = b.productName ? b.productName.toUpperCase() : "" // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
  }

  function sortByDescName(array: PRODUCTS_QUERYResult){

    array.sort((a, b) => {

      const nameA = a.productName ? a.productName.toUpperCase() : "" // ignore upper and lowercase
      const nameB = b.productName ? b.productName.toUpperCase() : "" // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
    
      // names must be equal
      return 0;
    });
  }

  function sortByAscPrice(array: PRODUCTS_QUERYResult){
      array.sort((a, b) => a.price && b.price ? a.price - b.price : 0);
  }

  function sortByDescPrice(array: PRODUCTS_QUERYResult){
    array.sort((a, b) => b.price && a.price ? b.price - a.price : 0);
  }

  function filterByPriceRange(db: PRODUCTS_QUERYResult, priceRange:number[]){
    const lowerPriceRangeRemoved = db.filter((product) => product.price ? product.price > priceRange[0] : null);
    const bothRangesRemoved = lowerPriceRangeRemoved.filter((product) => product.price ?  product.price < priceRange[1] : null);
    return bothRangesRemoved;
  }


  function filterBySearch(db: PRODUCTS_QUERYResult, query: string){
      const search = query.toLowerCase()
      return db.filter((product) => product.productName ? product.productName.toLowerCase().trim().includes(search.trim()) : null)
    }


// Hovedfunksjon som filterer produkter + egen type

  type ReturnTypes = {
      allProductsWithinRange: PRODUCTS_QUERYResult
      allProductsWithinRangeLength: number
      cappedProductList: PRODUCTS_QUERYResult
    }

    //Denne calles på hver render, sjekk ut useMemo()
    
  function getProducts(): ReturnTypes {
    const allProducts = filterBySearch(products, query)
    const allProductsWithinRange = filterByPriceRange(allProducts, priceMinMax)

    switch(filter) {
      case "nameAsc":
        console.log("Filter triggered: Name Ascending")
        sortByAscName(allProductsWithinRange)
        break;
      case "nameDesc":
        console.log("Filter triggered: Name Descending")
        sortByDescName(allProductsWithinRange)
        break;
      case "priceAsc":
        console.log("Filter triggered: Price Ascending")
        sortByAscPrice(allProductsWithinRange)
        break;
      case "priceDesc":
        console.log("Filter triggered: Price Descending")
        sortByDescPrice(allProductsWithinRange)
        break;
      default:
        console.log("No filter added or matches. Default to sortByAsc")
        sortByAscName(allProductsWithinRange)
    }

      const allProductsWithinRangeLength = allProductsWithinRange.length
      const cappedProductList = allProductsWithinRange.slice(0, listLength)

      return {allProductsWithinRange, allProductsWithinRangeLength, cappedProductList}
    }


  const productInfoArray = getProducts()
  const allProductsLength = productInfoArray.allProductsWithinRangeLength
  const cappedProductList = productInfoArray.cappedProductList
        
    
  return (
    <div>
       <div className='flex flex-col justify-center items-center border-b border-grey-100 gap-4 py-8 px-6'>
        <Text content='Produkter' role='heading' variant='headline' as='h1'/>
        <div className='w-full max-w-[700px]' role='search'>
          <Search 
            placeholder='Søk blant våre produkter' 
            setQuery={updateQuery} 
            query={query} />
        </div>
      </div>
      <MobileFilter 
        setFilter={updateFilter} 
        setSlider={updateSlider} 
        setQuery={updateQuery} 
        shadowPriceMinMax={shadowPriceMinMax} 
        setShadowPriceMinMax={setShadowPriceMinMax} 
        setListLength={updateListLength} 
        filter={filter} 
        sliderValue={priceMinMax}  
        resultsNumber={allProductsLength} />

      {/* 🚨Til Erik: Er dette en dum måte å gjøre det på? Altså separat mobilfilter og desktopfilter med akkurat det samme innholdet?*/}

      <div className="flex flex-col lg:flex-row gap-7 lg:gap-4 max-w-[1440px] m-auto px-6 lg:px-22 py-6">
        <Productlist 
          query={query} 
          products={cappedProductList} />
          <DesktopFilter 
          setFilter={updateFilter} 
          setSlider={updateSlider} 
          setQuery={updateQuery} 
          shadowPriceMinMax={shadowPriceMinMax} 
          setShadowPriceMinMax={setShadowPriceMinMax} 
          setListLength={updateListLength} 
          filter={filter} 
          sliderValue={priceMinMax}  
          resultsNumber={allProductsLength} />
      </div>
      <div className='w-full max-w-[1440px] m-auto -mt-6 pb-8'>
        <LoadMoreButton
          fullListLength={allProductsLength}
          listLength={listLength}
          setListLength={updateListLength}/>
      </div>
    </div>
  )
}
