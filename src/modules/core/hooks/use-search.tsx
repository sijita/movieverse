'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function useSearch() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback(
    (paramName: string, term: string) => {
      if (term) {
        params.delete('page');
        params.set(paramName, term);
      } else {
        params.delete(paramName);
      }

      replace(`${pathname}?${params.toString()}`);
    },
    1000
  );

  return {
    handleSearch,
    searchParams,
  };
}
