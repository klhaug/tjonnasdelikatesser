// app/components/debug/DebugReplaceLogger.tsx
'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';

export default function DebugReplaceLogger({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const originalReplace = router.replace;
    router.replace = (...args) => {
      console.log('[REPLACE CALLED]', ...args);
      return originalReplace(...args);
    };
  }, [router]);

  return <>{children}</>;
}
