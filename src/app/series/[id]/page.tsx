import SerieDetails from '@/modules/series/[id]/components/serie-details';
import {
  fetchSerieById,
  fetchSerieCredits,
  fetchSerieTrailer,
  fetchSimilarSeries,
} from '@/modules/series/[id]/api';
import { fetchSeriesCategories } from '@/modules/series/api';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const [serie, credits, similars, categories, trailer] = await Promise.all([
    fetchSerieById(id),
    fetchSerieCredits(id),
    fetchSimilarSeries(id),
    fetchSeriesCategories(),
    fetchSerieTrailer(id),
  ]);

  return (
    <main className="min-h-screen">
      <SerieDetails
        serie={serie}
        credits={credits}
        similars={similars}
        categories={categories}
        trailer={trailer}
      />
    </main>
  );
}
