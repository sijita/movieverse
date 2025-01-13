'use client';
import { motion } from 'framer-motion';
import type { MovieSimilars } from '@/modules/movies/[id]/types/movie-similars';
import { useState } from 'react';
import type { Movie } from '@/modules/movies/types/movie';
import { IconKeyframesFilled } from '@tabler/icons-react';
import PosterCard from '@/modules/core/components/poster-card';
import ShowMoreBtn from '@/modules/core/components/show-more-btn';
import SectionSubtitle from '@/modules/core/components/section-subtitle';

export default function SimilarMovies({
  similars,
  categories,
}: {
  similars: MovieSimilars[];
  categories: { id: number; name: string }[];
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.article
      className="flex flex-col gap-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <SectionSubtitle
        icon={
          <IconKeyframesFilled
            className="text-white fill-white flex-shrink-0"
            size={25}
          />
        }
        subtitle="Películas similares"
        rotate="rotate-1"
      />
      <div className="grid max-[400px]:grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {similars
          .filter((similarMovie) => similarMovie.poster_path)
          .slice(0, showMore ? similars.length : 5)
          .map((similarMovie) => (
            <PosterCard
              key={similarMovie.id}
              poster={similarMovie as unknown as Movie}
              categories={categories}
            />
          ))}
      </div>
      <ShowMoreBtn
        showMore={showMore}
        setShowMore={() => setShowMore(!showMore)}
      />
    </motion.article>
  );
}
