'use client'

import React from 'react'

const RefreshIcon = ({ className }: {className: string}) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13.65 2.68862C12.2 1.23862 10.21 0.338623 8.00001 0.338623C3.58001 0.338623 0.0100098 3.91862 0.0100098 8.33862C0.0100098 12.7586 3.58001 16.3386 8.00001 16.3386C11.73 16.3386 14.84 13.7886 15.73 10.3386H13.65C12.83 12.6686 10.61 14.3386 8.00001 14.3386C4.69001 14.3386 2.00001 11.6486 2.00001 8.33862C2.00001 5.02862 4.69001 2.33862 8.00001 2.33862C9.66001 2.33862 11.14 3.02862 12.22 4.11862L9.00001 7.33862H16V0.338623L13.65 2.68862Z"
      fill="currentColor"
    />
  </svg>
);


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
    <div className='w-full max-w-[1440] px-6 lg:px-22 m-auto'>
      {listLength >= fullListLength ? null : 
        <button 
          onClick={loadMore} 
          className='p-4 rounded-md hover:cursor-pointer group flex transition-all items-center justify-center gap-4 bg-yellow-300 hover:bg-yellow-350'>
            <RefreshIcon className={"text-black group-hover:rotate-45 transition-all"} />
            <span>Last mer</span>
        </button>}
    </div>
  )
}
