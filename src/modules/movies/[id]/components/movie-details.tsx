'use client';
import type { MovieDetails } from '@/modules/movies/types/movie';
import type { MovieCredits } from '@/modules/movies/[id]/types/movie-credits';
import type { MovieSimilars } from '@/modules/movies/[id]/types/movie-similars';
import {
  IconCalendar,
  IconClock,
  IconPlayerPlayFilled,
  IconStarFilled,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button, Chip, useDisclosure } from '@nextui-org/react';
import MovieCast from './movie-cast';
import SimilarMovies from './similar-movies';
import Link from 'next/link';
import TrailerModal from '@/modules/core/components/trailer-modal';
import FavoriteButton from '@/modules/core/components/ui/favorite-button';

export default function MovieDetails({
  movie,
  credits,
  similars,
  categories,
  trailer,
}: {
  movie: MovieDetails;
  credits: MovieCredits[];
  similars: MovieSimilars[];
  categories: { id: number; name: string }[];
  trailer: string;
}) {
  const { onOpen, onOpenChange, isOpen } = useDisclosure();

  return (
    <section>
      <TrailerModal
        trailer={trailer}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <header
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </header>
      <div className="px-10 sm:px-20 -mt-[200px] relative z-10 pb-10">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="max-[350px]:w-full w-64 flex-shrink-0 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative max-[350px]:w-full w-64 h-96 rounded-sm overflow-hidden shadow-2xl transition-transform duration-300 ease-in-out">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt={movie?.title}
                className="w-full h-full object-cover"
                width={500}
                height={500}
                priority
              />
            </div>
          </motion.div>
          <div className="flex flex-col gap-3 flex-grow">
            <div className="flex items-center gap-5">
              <motion.h1
                className="text-4xl md:text-5xl font-bold truncate text-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {movie?.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Chip className="rounded-sm" size="lg">
                  <div className="flex items-center gap-1">
                    <IconStarFilled className="text-yellow-400" size={20} />
                    <span className="text-2xl font-bold font-mono">
                      {movie?.vote_average.toFixed(1)}
                    </span>
                  </div>
                </Chip>
              </motion.div>
            </div>
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-1">
                <IconClock className="text-primary flex-shrink-0" size={20} />
                <span>{movie?.runtime} min</span>
              </div>
              <div className="flex items-center gap-1">
                <IconCalendar
                  className="text-primary flex-shrink-0"
                  size={20}
                />
                <span>{new Date(movie?.release_date).getFullYear()}</span>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {movie?.genres.map((genre) => (
                <Chip
                  key={genre?.id}
                  className="bg-white/20 text-white text-xs rounded-sm"
                  size="sm"
                >
                  {genre?.name}
                </Chip>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-200 leading-relaxed text-lg mt-3"
            >
              {movie?.overview}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-2 flex-wrap"
            >
              {movie?.homepage.length > 0 && (
                <Button
                  className="rounded-sm text-md text-black font-bold max-sm:flex-1 transform -rotate-2 hover:rotate-0 hover:scale-90 transition-transform duration-300 ease-in-out"
                  color="primary"
                  href={movie?.homepage}
                  as={Link}
                  target="_blank"
                >
                  <IconPlayerPlayFilled size={20} />
                </Button>
              )}
              {trailer?.length > 0 && (
                <Button
                  className="rounded-sm max-sm:flex-1 bg-white text-black p-2 transform rotate-2 w-fit font-bold hover:rotate-0"
                  onPress={() => onOpen()}
                >
                  Ver trailer
                </Button>
              )}
              <FavoriteButton
                id={movie?.id.toString() ?? ''}
                type={'Película'}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="px-10 sm:px-20 pt-14 pb-10 flex flex-col gap-10 bg-[#baff29]">
        {credits.length > 0 && <MovieCast credits={credits} />}
        <SimilarMovies similars={similars} categories={categories} />
      </div>
    </section>
  );
}
