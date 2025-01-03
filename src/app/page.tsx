import Hero from '@/modules/core/components/ui/hero';
import {
  fetchMoviesCategories,
  fetchNowPlayingMovies,
  fetchRandomMovie,
  fetchTrendingMovies,
} from '../modules/movies/api';
import HomeMoviesSection from '@/modules/movies/components/home-movies-section';
import HomeSeriesSection from '@/modules/series/components/home-series-section';
import { fetchSeriesCategories, fetchTrendingSeries } from '../modules/series/api';
import { Divider } from '@nextui-org/react';
import { cookies } from 'next/headers';
import Footer from '@/modules/core/components/ui/footer';

export default async function Home() {
  const cookieStore = await cookies();
  // const movies =
  //   searchParams?.category !== undefined
  //     ? await fetchMoviesByCategory(searchParams?.category)
  //     : await fetchPopularMovies();
  const [
    movie,
    trendingMovies,
    trendingSeries,
    nowPlayingMovies,
    moviesCategories,
    seriesCategories,
  ] = await Promise.all([
    fetchRandomMovie(),
    fetchTrendingMovies(
      (cookieStore.get('trendingMovies')?.value as 'day' | 'week') ?? 'week'
    ),
    fetchTrendingSeries(
      (cookieStore.get('trendingSeries')?.value as 'day' | 'week') ?? 'week'
    ),
    fetchNowPlayingMovies(),
    fetchMoviesCategories(),
    fetchSeriesCategories(),
  ]);

  return (
    <main className="min-h-screen flex flex-col">
      <Hero movie={movie} />
      <HomeMoviesSection
        trendingMovies={trendingMovies}
        nowPlayingMovies={nowPlayingMovies}
        categories={moviesCategories}
      />
      <div className="my-10 px-20 max-sm:px-10">
        <Divider />
      </div>
      <HomeSeriesSection
        trendingSeries={trendingSeries}
        categories={seriesCategories}
      />
      <Footer />
    </main>
  );
}
