import {
  fetchPopularSeries,
  fetchSeriesByCategory,
  fetchSeriesCategories,
} from '@/modules/series/api';
import SeriesCategoriesList from './series-categories-list';
import SeriesBentoGrid from './series-bento-grid';
import CategoryTitle from '@/modules/core/components/category-title';

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
        <CategoryTitle />
        <SeriesCategoriesList categories={categories} />
      </div>
      <SeriesBentoGrid
        series={seriesByCategory ?? popularSeries}
        categories={categories}
      />
    </section>
  );
}
