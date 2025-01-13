import { Movie } from '@/modules/movies/types/movie';
import PostersRow from '@/modules/core/components/posters-row';
import SectionSubtitle from '@/modules/core/components/section-subtitle';
import { IconThumbUpFilled } from '@tabler/icons-react';

export default function TopMoviesSection({
  topMovies,
  categories,
}: {
  topMovies: Movie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="flex flex-col gap-5">
      <SectionSubtitle
        icon={
          <IconThumbUpFilled
            className="text-white fill-white flex-shrink-0"
            size={25}
          />
        }
        subtitle="Peliculas"
        rotate="-rotate-2"
      />
      <PostersRow posters={topMovies} categories={categories} />
    </section>
  );
}
