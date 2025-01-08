import { Movie } from '@/modules/movies/types/movie';
import PosterCard from './poster-card';
import { Serie } from '@/modules/series/types/serie';

export default function PostersRow({
  posters,
  categories,
}: {
  posters: Movie[] | Serie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <div className="flex gap-5 w-full flex-nowrap overflow-x-scroll scrollbar-hide pb-5">
      {posters.map((poster, index) => (
        <PosterCard
          key={index}
          poster={poster}
          categories={categories}
          additionalClass="h-[400px] max-h-[400px]"
        />
      ))}
    </div>
  );
}
