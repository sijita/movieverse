import {
  fetchPopularSeries,
  fetchSeriesCategories,
} from '@/modules/series/api';
import { IconCategoryFilled } from '@tabler/icons-react';
import SeriesCategoriesList from './series-categories-list';
import SeriesBentoGrid from './series-bento-grid';

export default async function SeriesCategoriesSection() {
  const [popularSeries, categories] = await Promise.all([
    fetchPopularSeries(),
    fetchSeriesCategories(),
  ]);

  return (
    <section className="flex flex-col p-10 sm:p-20 gap-10 min-h-screen overflow-auto">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex items-center gap-3">
          <IconCategoryFilled
            className="text-primary flex-shrink-0"
            size={25}
          />
          <h2 className="text-3xl font-bold">Categorías</h2>
        </div>
        <SeriesCategoriesList categories={categories} />
      </div>
      <SeriesBentoGrid series={popularSeries} categories={categories} />
    </section>
  );
}
