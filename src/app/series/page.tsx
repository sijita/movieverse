import Hero from '@/modules/core/components/ui/hero';
import { fetchRandomSerie } from '@/modules/series/api';
import SeriesCategoriesSection from '@/modules/series/components/categories/series-categories-section';
import SeriesPageContent from '@/modules/series/components/series-page-content';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { category } = await searchParams;
  const serie = await fetchRandomSerie();

  return (
    <main className="min-h-screen flex flex-col">
      <Hero poster={serie} />
      <SeriesCategoriesSection category={category} />
      <SeriesPageContent />
    </main>
  );
}
