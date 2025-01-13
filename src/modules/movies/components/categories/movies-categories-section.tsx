import MoviesBentoGrid from './movies-bento-grid';
import { IconCategoryFilled } from '@tabler/icons-react';
import MoviesCategoriesList from './movies-categories-list';
import {
  fetchMoviesByCategory,
  fetchMoviesCategories,
  fetchPopularMovies,
} from '@/modules/movies/api';

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
        <div className="flex items-center gap-1 bg-white text-black p-2 transform -rotate-1 w-fit shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <IconCategoryFilled className="flex-shrink-0" size={25} />
          <h2 className="text-4xl font-bold ">Categorías</h2>
        </div>
        <MoviesCategoriesList categories={categories} />
      </div>
      <MoviesBentoGrid
        movies={moviesByCategory ?? popularMovies}
        categories={categories}
      />
    </section>
  );
}
