'use client';
import { motion } from 'framer-motion';
import type { MovieSimilars } from '@/modules/movies/[id]/types/movie-similars';
import { useState } from 'react';
import PosterCard from '@/modules/core/components/ui/poster-card';
import { Movie } from '../../types/movie';
import { Button } from '@nextui-org/react';

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
      <h2 className="text-3xl font-bold">Películas similares</h2>
      <div className="grid max-[400px]:grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {similars
          .slice(0, showMore ? similars.length : 5)
          .map((similarMovie) => (
            <PosterCard
              key={similarMovie.id}
              poster={similarMovie as unknown as Movie}
              categories={categories}
            />
            // <div key={similarMovie.id} className="text-center">
            //   <Image
            //     src={`https://image.tmdb.org/t/p/w185${similarMovie.poster_path}`}
            //     alt={similarMovie.title}
            //     className="w-full aspect-[2/3] object-cover rounded-lg mb-2"
            //     width={185}
            //     height={278}
            //   />
            //   <p className="font-semibold truncate">{similarMovie.title}</p>
            // </div>
          ))}
      </div>
      <Button
        onPress={() => setShowMore(!showMore)}
        color="primary"
        className="w-full text-black font-medium"
      >
        {showMore ? 'Mostrar menos' : 'Mostrar más'}
      </Button>
    </motion.article>
  );
}
