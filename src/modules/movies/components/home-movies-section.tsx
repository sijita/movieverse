import Link from 'next/link';
import TrendingMoviesSection from './trending-movies-section';
import NowPlayingMoviesSection from './now-playing-movies-section';
import {
  fetchMoviesCategories,
  fetchNowPlayingMovies,
  fetchTrendingMovies,
} from '@/modules/movies/api';
import { cookies } from 'next/headers';

export default async function HomeMoviesSection() {
  const cookieStore = await cookies();

  const [trendingMovies, nowPlayingMovies, categories] = await Promise.all([
    fetchTrendingMovies(
      (cookieStore.get('trendingMovies')?.value as 'day' | 'week') ?? 'week'
    ),

    fetchNowPlayingMovies(),
    fetchMoviesCategories(),
  ]);

  return (
    <section className="px-10 sm:px-20 py-5 flex flex-col gap-10">
      <div>
        <Link
          href="/movies"
          className="text-4xl font-bold text-primary hover:text-white transition-colors"
        >
          Películas
        </Link>
      </div>
      <TrendingMoviesSection
        trendingMovies={trendingMovies}
        categories={categories}
      />
      <NowPlayingMoviesSection
        nowPlayingMovies={nowPlayingMovies}
        categories={categories}
      />
    </section>
  );
}
