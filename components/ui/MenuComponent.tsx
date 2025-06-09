import React from 'react'

import TjonnasMenu from '@/components/ui/TjonnasMenu';
import NorvaldMenu from '@/components/ui/NorvaldMenu';
import CateringMenu from '@/components/ui/CateringMenu';

export default function MenuComponent({selectedMenu}: {selectedMenu: string}) {
  return (
    <div>
    { selectedMenu === "tjonnas" ? <TjonnasMenu /> : null}
    { selectedMenu === "norvald" ? <NorvaldMenu /> : null}
    { selectedMenu === "catering" ? <CateringMenu /> : null}
    </div>
  )
}
