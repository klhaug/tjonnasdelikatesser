import React from 'react'

import TjonnasMenu from '@/components/ui/TjonnasMenu';
import NorvaldMenu from '@/components/ui/NorvaldMenu';
import CateringMenu from '@/components/ui/CateringMenu';

export default function MenuComponent({selectedMenu, tjonnasMenu, norvaldMenu}: {selectedMenu: string}) {
  return (
    <div>
    { selectedMenu === "tjonnasdelikatesser" ? <TjonnasMenu tjonnasMenu = {tjonnasMenu} /> : null}
    { selectedMenu === "norvald" ? <NorvaldMenu norvaldMenu = {norvaldMenu} /> : null}
    { selectedMenu === "catering" ? <CateringMenu /> : null}
    </div>
  )
}
