import Hero from '@/modules/core/components/ui/hero';
import { fetchRandomSerie } from '@/modules/series/api';
import SeriesCategoriesSection from '@/modules/series/components/series-categories-section';
import SeriesPageContent from '@/modules/series/components/series-page-content';

export default async function Page() {
  const serie = await fetchRandomSerie();

  return (
    <main className="min-h-screen flex flex-col">
      <Hero poster={serie} />
      <SeriesCategoriesSection />
      <SeriesPageContent />
    </main>
  );
}
