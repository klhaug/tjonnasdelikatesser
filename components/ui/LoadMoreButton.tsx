'use client'
import React from 'react'

export default function LoadMoreButton({loadMoreHandler}) {
  return (
    <div>
      <button onClick={loadMoreHandler}>Last mer</button>
    </div>
  )
}
