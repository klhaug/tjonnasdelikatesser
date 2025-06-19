import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { ContactSkeleton } from '@/components/ui/Skeletons';
import React from 'react'


export default function Loading() {
  return (
    <div>
      <Breadcrumbs breadcrumbs={[
          { label: 'Forsiden', href: '/' },
          {
            label: 'Kontakt',
            href: '/contact',
            active: true,
          },
        ]} />
    <ContactSkeleton />
    </div>
  );
}
