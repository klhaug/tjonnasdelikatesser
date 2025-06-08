'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder, setQuery, query }: { placeholder: string, setQuery: (value: string) => void }) {
  
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const staggeredUrlUpdate = useDebouncedCallback((term) => {   
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    console.log("REPLACING URL", `${pathname}?${params.toString()}`);
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleSearch = (input) => {
    console.log(input)
    setQuery(input)
    staggeredUrlUpdate(input)
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 px-6 py-4 pl-10 outline-2 outline-yellow-350 text-base  placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        value={query}
      />
      <Image src='/icons/Search.svg' className='absolute left-3 top-1/2 h-[24px] w-[24px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' height={40} width={30} alt='icon' />
    </div>
  );
}
