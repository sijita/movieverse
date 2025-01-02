import { IconCategoryFilled } from '@tabler/icons-react';
import MoviesCategoriesList from './movies-categories-list';

export default function Categories({
  categories,
}: {
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="flex flex-col gap-5 w-1/4 max-lg:w-full">
      <div className="flex items-center gap-3">
        <IconCategoryFilled className="text-primary flex-shrink-0" size={25} />
        <h2 className="text-3xl font-bold">Categorías</h2>
      </div>
      <MoviesCategoriesList categories={categories} />
    </section>
  );
}
