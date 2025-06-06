'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

export default function LoadMoreButton() {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  
  const loadMore = () => {
    console.log("im working")
   
    const params = new URLSearchParams(window.location.search);
    const limit = params.get("limit")
    if(limit === null) {
      console.log("limit is null")
      params.set("limit", "10")
      console.log("REPLACING URL", `${pathname}?${params.toString()}`);
      replace(`${pathname}?${params.toString()}`);
    }
  
    const convertedLimit = parseFloat(limit);
    const updatedLimit = convertedLimit + 10;
    const updatedLimitToString = updatedLimit.toLocaleString();
    console.log("Limit:", updatedLimitToString)

    if(limit){
      params.set("limit", updatedLimitToString)
      console.log("REPLACING URL", `${pathname}?${params.toString()}`);
    replace(`${pathname}?${params.toString()}`);
    }

    }


  console.log("BUTTON SearchParams: ", searchParams)
  return (
    <div>
      <button onClick={loadMore} className='border p-4 hover:cursor-pointer bg-yellow-300 hover:bg-yellow-350'>Last mer</button>
    </div>
  )
}
