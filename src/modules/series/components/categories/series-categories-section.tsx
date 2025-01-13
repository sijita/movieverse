import {
  fetchPopularSeries,
  fetchSeriesByCategory,
  fetchSeriesCategories,
} from '@/modules/series/api';
import { IconCategoryFilled } from '@tabler/icons-react';
import SeriesCategoriesList from './series-categories-list';
import SeriesBentoGrid from './series-bento-grid';

export default async function SeriesCategoriesSection({
  category,
}: {
  category?: string;
}) {
  const [popularSeries, seriesByCategory, categories] = await Promise.all([
    fetchPopularSeries(),
    fetchSeriesByCategory(category ?? ''),
    fetchSeriesCategories(),
  ]);

  return (
    <section className="relative overflow-hidden sm:overflow-auto flex flex-col p-10 sm:p-20 gap-10 min-h-screen">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex items-center gap-1 bg-white text-black p-2 transform -rotate-1 w-fit shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <IconCategoryFilled className="flex-shrink-0" size={25} />
          <h2 className="text-4xl font-bold ">Categorías</h2>
        </div>
        <SeriesCategoriesList categories={categories} />
      </div>
      <SeriesBentoGrid
        series={seriesByCategory ?? popularSeries}
        categories={categories}
      />
    </section>
  );
}
