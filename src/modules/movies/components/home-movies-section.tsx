import TrendingMoviesSection from './trending-movies-section';
import NowPlayingMoviesSection from './now-playing-movies-section';
import {
  fetchMoviesCategories,
  fetchNowPlayingMovies,
  fetchTrendingMovies,
} from '@/modules/movies/api';
import { cookies } from 'next/headers';
import SectionTitle from '@/modules/core/components/section-title';

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
    <section className="relative overflow-hidden px-10 sm:px-20 py-14 flex flex-col gap-10 bg-[#eaeaea]">
      <SectionTitle title="Películas" href="/movies" />
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
