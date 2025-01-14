import {
  fetchFavoritesMovies,
  fetchFavoritesSeries,
} from '@/modules/favorites/api';
import TypeTabs from '@/modules/favorites/components/type-tabs';
import { fetchMoviesCategories } from '@/modules/movies/api';
import { fetchSeriesCategories } from '@/modules/series/api';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/');
  }

  const [movies, series, moviesCategories, seriesCategories] =
    await Promise.all([
      fetchFavoritesMovies(),
      fetchFavoritesSeries(),
      fetchMoviesCategories(),
      fetchSeriesCategories(),
    ]);

  return (
    <main className="min-h-screen">
      <TypeTabs
        movies={movies}
        series={series}
        movieCategories={moviesCategories}
        serieCategories={seriesCategories}
      />
    </main>
  );
}
