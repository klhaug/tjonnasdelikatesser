'use client'

import React from 'react'
import { useState } from 'react'
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps"

export default function GoogleMaps() {
    const position = {lat: 60.795510, lng: 10.690814}
  return (
      <APIProvider apiKey={typeof process.env.NEXT_PUBLIC_GOOGLE_MAPS === "string" ? process.env.NEXT_PUBLIC_GOOGLE_MAPS : ''}>
          <div className='h-[400px] rounded-md w-[768px]'>
            <Map defaultZoom={18} defaultCenter={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
                <AdvancedMarker position={position}>
                    <Pin background={"#FEC947"} borderColor={"#5C4F31"} glyphColor={"#5C4F31"}></Pin>
                </AdvancedMarker>
            </Map>
           </div>
      </APIProvider>
  )
}
