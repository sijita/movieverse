'use client';
import { Movie } from '@/modules/movies/types/movie';
import { useState } from 'react';
import PosterCard from '@/modules/core/components/poster-card';
import ShowMoreBtn from '@/modules/core/components/show-more-btn';
import SectionSubtitle from '@/modules/core/components/section-subtitle';
import { IconClockFilled } from '@tabler/icons-react';

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
      <SectionSubtitle
        icon={
          <IconClockFilled
            className="text-white fill-white flex-shrink-0"
            size={25}
          />
        }
        subtitle="Estrenos"
        rotate="rotate-1"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {nowPlayingMovies.slice(0, showMore ? 20 : 10).map((movie, i) => (
          <div key={i} className="w-full">
            <PosterCard poster={movie} categories={categories} />
          </div>
        ))}
      </div>
      <ShowMoreBtn
        showMore={showMore}
        setShowMore={() => setShowMore(!showMore)}
      />
    </section>
  );
}
