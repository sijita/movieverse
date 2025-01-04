import MoviesBentoGrid from './movies-bento-grid';
import { IconCategoryFilled } from '@tabler/icons-react';
import MoviesCategoriesList from './movies-categories-list';
import {
  fetchMoviesCategories,
  fetchPopularMovies,
} from '@/modules/movies/api';

export default async function MoviesCategoriesSection() {
  const [popularMovies, categories] = await Promise.all([
    fetchPopularMovies(),
    fetchMoviesCategories(),
  ]);

  return (
    <section className="flex flex-col lg:flex-row items-stretch p-10 sm:p-20 gap-10 h-screen overflow-auto">
      <div className="flex flex-col gap-5 w-1/4 max-lg:w-full">
        <div className="flex items-center gap-3">
          <IconCategoryFilled
            className="text-primary flex-shrink-0"
            size={25}
          />
          <h2 className="text-3xl font-bold">Categorías</h2>
        </div>
        <MoviesCategoriesList categories={categories} />
      </div>
      <MoviesBentoGrid movies={popularMovies} categories={categories} />
    </section>
  );
}
