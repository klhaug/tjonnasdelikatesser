'use client'

import { useState } from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Event({}) {
    const [isComing, setIsComing] = useState(true)

    const { data, error, isLoading } = useSWR(`/testData/events.json`, fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>


  return (
    <section className='mx-auto max-w-[1440px] md:px-12 px-6 bg-gray-100'>
        <h1>
            Arrangementer
        </h1>
        <div>
            <button onClick={() => setIsComing(true)}>Kommende</button>
            <button onClick={() => setIsComing(false)}>Tidligere</button>
        </div>
        <p>{data.title}</p>
        <p>{isComing ? 'true' : 'false'}</p>
    </section>
  );
}
