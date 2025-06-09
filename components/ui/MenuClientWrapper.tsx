'use client'

import React, { useState } from 'react'
import MenuSelectDropdown from '@/components/ui/MenuSelectDropdown';
import MenuComponent from '@/components/ui/MenuComponent';

export default function MenuClientWrapper() {
    const [selectedMenu, setSelectedMenu] = useState("tjonnas")

  return (
    <div>
      <MenuSelectDropdown />
      <MenuComponent selectedMenu={selectedMenu} />
    </div>
  )
}
