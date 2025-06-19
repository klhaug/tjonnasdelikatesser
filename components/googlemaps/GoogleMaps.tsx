'use client'

import React from 'react'
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
} from "@vis.gl/react-google-maps"

export default function GoogleMaps({position}: {position: {lng: number, lat: number }}) {
  return (
      <APIProvider apiKey={typeof process.env.NEXT_PUBLIC_GOOGLE_MAPS === "string" ? process.env.NEXT_PUBLIC_GOOGLE_MAPS : ''}>
          <div className='h-[400px] rounded-md w-full'>
            <Map defaultZoom={16} defaultCenter={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
                <AdvancedMarker position={position}>
                    <Pin background={"#FEC947"} borderColor={"#5C4F31"} glyphColor={"#5C4F31"}></Pin>
                </AdvancedMarker>
            </Map>
           </div>
      </APIProvider>
  )
}
