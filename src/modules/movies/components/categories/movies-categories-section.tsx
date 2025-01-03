import MoviesBentoGrid from './movies-bento-grid';
import { Movie } from '@/modules/movies/types/movie';
import { IconCategoryFilled } from '@tabler/icons-react';
import MoviesCategoriesList from './movies-categories-list';

export default function MoviesCategoriesSection({
  movies,
  categories,
}: {
  movies: Movie[];
  categories: { id: number; name: string }[];
}) {
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
      <MoviesBentoGrid movies={movies} categories={categories} />
    </section>
  );
}
