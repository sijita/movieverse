import TrendingMoviesSection from './trending-movies-section';
import NowPlayingMoviesSection from './now-playing-movies-section';
import {
  fetchMoviesCategories,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
} from '@/modules/movies/api';
import { cookies } from 'next/headers';
import TopMoviesSection from './top-movies-section';

export default async function MoviesPageContent() {
  const cookieStore = await cookies();

  const [trendingMovies, nowPlayingMovies, topMovies, categories] =
    await Promise.all([
      fetchTrendingMovies(
        (cookieStore.get('trendingMovies')?.value as 'day' | 'week') ?? 'week'
      ),
      fetchNowPlayingMovies(),
      fetchTopRatedMovies(),
      fetchMoviesCategories(),
    ]);

  return (
    <section className="px-10 sm:px-20 py-5 flex flex-col gap-10">
      <TrendingMoviesSection
        trendingMovies={trendingMovies}
        categories={categories}
      />
      <NowPlayingMoviesSection
        nowPlayingMovies={nowPlayingMovies}
        categories={categories}
      />
      <TopMoviesSection topMovies={topMovies} categories={categories} />
    </section>
  );
}
