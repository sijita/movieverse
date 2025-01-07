import SerieDetails from '@/modules/series/[id]/components/serie-details';
import {
  fetchSerieById,
  fetchSerieCredits,
  fetchSimilarSeries,
} from '@/modules/series/[id]/api';
import { fetchSeriesCategories } from '@/modules/series/api';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const [serie, credits, similars, categories] = await Promise.all([
    fetchSerieById(id),
    fetchSerieCredits(id),
    fetchSimilarSeries(id),
    fetchSeriesCategories(),
  ]);

  return (
    <main className="min-h-screen">
      <SerieDetails
        serie={serie}
        credits={credits}
        similars={similars}
        categories={categories}
      />
    </main>
  );
}
