import Hero from '@/components/ui/hero';
import {
  fetchMoviesByCategory,
  fetchMoviesCategories,
  fetchPopularMovies,
  fetchRandomMovie,
  fetchTrendingMovies,
} from './api';
import Categories from '@/components/core/categories/categories';
import MoviesBentoGrid from '@/components/core/movies/movies-bento-grid';
import TrendingMoviesSection from '@/components/core/movies/trending-movies-section';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const movies =
    searchParams?.category !== undefined
      ? await fetchMoviesByCategory(searchParams?.category)
      : await fetchPopularMovies();
  const [movie, trendingMovies, categories] = await Promise.all([
    fetchRandomMovie(),
    fetchTrendingMovies((searchParams?.trending as 'day' | 'week') ?? 'week'),
    fetchMoviesCategories(),
  ]);

  return (
    <main className="min-h-screen flex flex-col">
      <Hero movie={movie} />
      <div className="flex flex-col lg:flex-row items-stretch p-10 sm:p-20 gap-10 h-screen overflow-auto">
        <Categories categories={categories} />
        <MoviesBentoGrid movies={movies} categories={categories} />
      </div>
      <TrendingMoviesSection
        trendingMovies={trendingMovies}
        categories={categories}
      />
    </main>
  );
}
