'use client'

import React from 'react'
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
} from "@vis.gl/react-google-maps"

export default function GoogleMaps({position}: {position: {lat: number | null , lng: number | null}}) {
    if(position.lat === null || position.lng === null ) return;
    const certainPosition = {
        lat: position.lat,
        lng: position.lng
    }
  return (
      <APIProvider apiKey={typeof process.env.NEXT_PUBLIC_GOOGLE_MAPS === "string" ? process.env.NEXT_PUBLIC_GOOGLE_MAPS : ''}>
          <div className='h-[400px] rounded-md w-full'>
            <Map defaultZoom={16} defaultCenter={certainPosition} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
                <AdvancedMarker position={certainPosition}>
                    <Pin background={"#FEC947"} borderColor={"#5C4F31"} glyphColor={"#5C4F31"}></Pin>
                </AdvancedMarker>
            </Map>
           </div>
      </APIProvider>
  )
}
