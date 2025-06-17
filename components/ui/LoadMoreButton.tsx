'use client'

import React from 'react'

type Props = {
  fullListLength: number | null
  listLength: number | null
  setListLength: (input: number) => void
}

export default function LoadMoreButton({fullListLength, listLength, setListLength}: Props) {

  if(fullListLength === null || listLength === null) return;
    
  const loadMore = () => {
    setListLength(listLength)
    }
  
    return (
    <div>
      {listLength >= fullListLength ? null : <button onClick={loadMore} className='border p-4 hover:cursor-pointer bg-yellow-300 hover:bg-yellow-350'>Last mer</button>}
    </div>
  )
}
