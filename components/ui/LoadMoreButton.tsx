'use client'

import React from 'react'

export default function LoadMoreButton({fullListLength, listlength, setListLength}) {
  
  const loadMore = () => {
    setListLength(listlength)
    }
  
    return (
    <div>
      {listlength >= fullListLength ? null : <button onClick={loadMore} className='border p-4 hover:cursor-pointer bg-yellow-300 hover:bg-yellow-350'>Last mer</button>}
    </div>
  )
}
