'use client';
import { IconClockFilled } from '@tabler/icons-react';
import { Movie } from '@/modules/movies/types/movie';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import PosterCard from '@/modules/core/components/poster-card';

export default function NowPlayingMoviesSection({
  nowPlayingMovies,
  categories,
}: {
  nowPlayingMovies: Movie[];
  categories: { id: number; name: string }[];
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <IconClockFilled className="text-primary flex-shrink-0" size={25} />
        <h2 className="text-3xl font-semibold">Últimos estrenos</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
        {nowPlayingMovies.slice(0, showMore ? 20 : 10).map((movie, i) => (
          <div key={i} className="w-full">
            <PosterCard poster={movie} categories={categories} />
          </div>
        ))}
      </div>
      <Button
        onPress={() => setShowMore(!showMore)}
        color="primary"
        className="w-full text-black font-medium"
      >
        {showMore ? 'Mostrar menos' : 'Mostrar más'}
      </Button>
    </section>
  );
}
