import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

export default function useSelectTrendingKey() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const handleSelectKey = (key: 'day' | 'week') => {
    params.set('trending', key.toString());

    return replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return {
    handleSelectKey,
    searchParams,
  };
}
