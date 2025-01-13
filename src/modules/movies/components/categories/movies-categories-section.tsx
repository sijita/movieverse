import MoviesBentoGrid from './movies-bento-grid';
import MoviesCategoriesList from './movies-categories-list';
import {
  fetchMoviesByCategory,
  fetchMoviesCategories,
  fetchPopularMovies,
} from '@/modules/movies/api';
import CategoryTitle from '@/modules/core/components/category-title';

export default async function MoviesCategoriesSection({
  category,
}: {
  category?: string;
}) {
  const [popularMovies, moviesByCategory, categories] = await Promise.all([
    fetchPopularMovies(),
    fetchMoviesByCategory(category ?? ''),
    fetchMoviesCategories(),
  ]);

  return (
    <section className="relative overflow-hidden sm:overflow-auto flex flex-col lg:flex-row items-stretch p-10 sm:p-20 gap-10 sm:h-screen">
      <div className="flex flex-col gap-5 w-1/4 max-lg:w-full">
        <CategoryTitle />
        <MoviesCategoriesList categories={categories} />
      </div>
      <MoviesBentoGrid
        movies={moviesByCategory ?? popularMovies}
        categories={categories}
      />
    </section>
  );
}
