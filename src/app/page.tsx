import Hero from '@/components/ui/hero';
import {
  fetchMoviesByCategory,
  fetchMoviesCategories,
  fetchPopularMovies,
  fetchRandomMovie,
} from './api';
import Categories from '@/components/core/categories/categories';
import MovieBentoGrid from '@/components/core/movies/movies-grid';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const movies =
    searchParams?.category !== undefined
      ? await fetchMoviesByCategory(searchParams?.category)
      : await fetchPopularMovies();
  const [movie, categories] = await Promise.all([
    fetchRandomMovie(),
    fetchMoviesCategories(),
  ]);

  return (
    <main className="min-h-screen flex flex-col gap-10">
      <Hero movie={movie} />
      <div className="flex flex-col lg:flex-row items-stretch p-10 sm:p-20 gap-10 h-screen">
        <Categories categories={categories} />
        <MovieBentoGrid movies={movies} categories={categories} />
      </div>
    </main>
  );
}
