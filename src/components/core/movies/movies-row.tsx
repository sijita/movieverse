import { Movie } from '@/types/movies';
import MovieCard from './movie-card';

export default function MoviesRow({ movies }: { movies: Movie[] }) {
  return (
    <div className="flex gap-5 w-full flex-nowrap overflow-x-scroll scrollbar-hide pb-5">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}
