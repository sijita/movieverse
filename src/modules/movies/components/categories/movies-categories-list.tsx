'use client';
import useSelectCategory from '@/modules/core/hooks/use-select-category';
import { categoryIcons } from '@/utils/constants/cateogry-icons';
import { Button, ScrollShadow } from '@nextui-org/react';

export default function MoviesCategoriesList({
  categories,
}: {
  categories: { id: number; name: string }[];
}) {
  const { searchParams, handleSelectCategory } = useSelectCategory();

  return (
    <ScrollShadow className="flex flex-col gap-5 max-lg:flex-row h-[max(calc(100vh-10rem),40rem)] w-full flex-1">
      {categories.map((category: { id: number; name: string }) => (
        <div key={category.id}>
          <Button
            startContent={
              <div
                className={`flex-shrink-0 transition-colors ${
                  searchParams.get('category') === String(category.id)
                    ? 'text-black group-hover:text-primary'
                    : 'text-primary group-hover:text-black'
                }`}
              >
                {
                  categoryIcons[
                    category.name
                      .toLowerCase()
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .replace(/ /g, '_') as keyof typeof categoryIcons
                  ]
                }
              </div>
            }
            className={`rounded-sm px-6 h-16 hover:scale-95 hover:text-black transition-all ${
              searchParams.get('category') === String(category.id)
                ? 'bg-primary text-black hover:bg-default hover:text-white'
                : 'bg-default hover:bg-primary'
            }`}
            onPress={() => handleSelectCategory(category.id)}
            fullWidth
          >
            <p className="text-lg font-semibold text-inherit">
              {category.name}
            </p>
          </Button>
        </div>
      ))}
    </ScrollShadow>
  );
}
