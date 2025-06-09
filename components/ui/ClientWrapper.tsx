'use client'

import Search from '@/components/ui/Search'
import MobileFilter from "@/components/ui/MobileFilter"
import Text from '@/components/ui/Text';
import LoadMoreButton from '@/components/ui/LoadMoreButton';
import Productlist from './Productlist';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function ClientWrapper({products}) {

 const [filter, setFilter] = useState("");
 const [query, setQuery] = useState("");
 const [debouncedQuery, setDebouncedQuery] = useState("")
 const [priceMinMax, setPriceMinMax] = useState([0, 2000])
 const [shadowPriceMinMAx, setShadowPriceMinMax] = useState([])
 const [hasHydrated, setHasHydrated] = useState(false);
 const [listLength, setListLength] = useState(10)
 
 const searchParams = useSearchParams();
 const getFilter = searchParams.get('filter')
 const getQuery = searchParams.get("query")
 const getPriceMin = searchParams.get("price_min")
 const getPriceMax = searchParams.get("price_max")

console.log("Has Hydrated", hasHydrated)

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

     const updateFilter = (input) => {
        console.log("Update filter", input)
        setFilter(input)
     }

     const updateQuery = (input) => {
        console.log("Update Query:", input)
        setQuery(input)
     }

     const updateSlider = (input) => {
        console.log("Update Slider:", input)
        setPriceMinMax(input)
     }

     const updateListLength = (input) => {
        const newListLength = input + 10;
        console.log("Listlength updated:", newListLength)
        setListLength(newListLength)
     }



function filterBySearch(db, query){
    const re = new RegExp(String.raw`${query}`, "i");
    return db.filter((product) => product.name.match(re))
  }

// const allProducts = filterBySearch(products, debouncedQuery)
// const allProductsLength = allProducts.length
// const cappedProductList = allProducts.slice(0, listLength)



function getProducts() {
  const allProducts = filterBySearch(products, debouncedQuery)

  switch(filter) {
    case "nameAsc":
      console.log("Filter triggered: Name Ascending")
      sortByAscName(allProducts)
      break;
    case "nameDesc":
      console.log("Filter triggered: Name Descending")
      sortByDescName(allProducts)
      break;
    case "priceAsc":
      console.log("Filter triggered: Price Ascending")
      sortByAscPrice(allProducts)
      break;
    case "priceDesc":
      console.log("Filter triggered: Price Descending")
      sortByDescPrice(allProducts)
      break;
  }


  const allProductsLength = allProducts.length
  const cappedProductList = allProducts.slice(0, listLength)

  return [allProducts, allProductsLength, cappedProductList]
}

const productInfoArray = getProducts()
const allProducts = productInfoArray[0]
const allProductsLength = productInfoArray[1]
const cappedProductList = productInfoArray[2]
  
const updateDebouncedUrl = useDebouncedCallback((query) => {   
    setDebouncedQuery(query)
  }, 200);

useEffect(() => {
    updateDebouncedUrl(query)
}, [query])






















// SORTING FUNCTIONS
// Disse fire påvirker vel det originale arrayet
  function sortByAscName(array: FakeProduct[]){

    array.sort((a, b) => {

      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
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

  function sortByDescName(array: FakeProduct[]){

    array.sort((a, b) => {

      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
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

  function sortByAscPrice(array: FakeProduct[]){
   array.sort((a, b) => a.price - b.price);
  }

  function sortByDescPrice(array: FakeProduct[]){
    array.sort((a, b) => b.price - a.price);
  }

  
  //Hovedfunksjoner
  function filterByPriceDirection(db, filter){
    if(filter === "priceAsc"){
      sortByAscPrice(db)
      return;
    } else if(filter === "priceDesc"){
      sortByDescPrice(db)
      return;
    } else {
      console.error("Unknown Filter Value", error)
      return;
    }
  }

  function filterByPriceRange(db: FakeProduct[], priceRange:number[]){
    const lowerPriceRangeRemoved = db.filter((product) => product.price > priceRange[0]);
    const bothRangesRemoved = lowerPriceRangeRemoved.filter((product) => product.price < priceRange[1]);
    return bothRangesRemoved;
  }

  function filterByName(db, filter){
    if(filter === "nameAsc"){
      sortByAscName(db)
      return;
    } else if(filter === "nameDesc"){
      sortByDescName(db)
      return;
    } else {
      console.error("Unknown Filter Value", error)
      return;
    }
  }
  
    
  return (
    <div>
       <div className='flex flex-col justify-center items-center border-b border-grey-100 gap-4 py-8 px-6'>
        <Text content='Produkter' variant='headline' as='h1'/>
        <div className='w-full'>
          <Search placeholder='Søk blant våre produkter' setQuery={updateQuery} query={query} />
        </div>
      </div>
      <MobileFilter setFilter={updateFilter} setSlider={updateSlider} setQuery={updateQuery} shadowPriceMinMax={shadowPriceMinMAx} setShadowPriceMinMax={setShadowPriceMinMax} setListLength={updateListLength} filter={filter} sliderValue={priceMinMax}  resultsNumber={allProductsLength} />
      <div className="flex flex-col gap-7 px-6 py-6">
        <Productlist query={query} products={cappedProductList} />
      </div>
      <LoadMoreButton fullListLength={allProductsLength} listlength={listLength} setListLength={updateListLength}/>
    </div>
  )
}
