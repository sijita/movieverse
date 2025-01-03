import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

export default function useSelectCategory() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const handleSelectCategory = (id: number) => {
    if (params.get('category') === String(id)) {
      params.delete('category');
    } else {
      params.set('category', id.toString());
    }

    return replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return {
    handleSelectCategory,
    searchParams,
  };
}
