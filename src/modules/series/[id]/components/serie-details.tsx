'use client';
import type { SerieDetails } from '@/modules/series/[id]/types/serie-details';
import type { SerieCredits } from '@/modules/series/[id]/types/serie-credits';
import type { SerieSimilars } from '@/modules/series/[id]/types/serie-similars';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Chip } from '@nextui-org/react';
import {
  IconCalendar,
  IconNumber,
  IconSection,
  IconStarFilled,
} from '@tabler/icons-react';
import SerieCast from './serie-cast';
import SimilarSeries from './similar-series';

export default function SerieDetails({
  serie,
  credits,
  similars,
  categories,
}: {
  serie: SerieDetails;
  credits: SerieCredits[];
  similars: SerieSimilars[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section>
      <header
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${serie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </header>
      <section className="px-10 sm:px-20 -mt-[200px] relative z-10">
        <article className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-96 rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 ease-in-out">
              <Image
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
          <div className="flex flex-col gap-3 flex-grow">
            <div className="flex items-center gap-5">
              <motion.h1
                className="text-4xl md:text-5xl font-bold truncate"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {serie.name}
              </motion.h1>
              <Chip size="lg">
                <div className="flex items-center gap-1">
                  <IconStarFilled className="text-yellow-400" size={20} />
                  <span className="text-2xl font-semibold">
                    {serie.vote_average.toFixed(1)}
                  </span>
                </div>
              </Chip>
            </div>
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <IconNumber size={20} />
                  <span>{serie.number_of_episodes} Episodios</span>
                </div>
                <span>-</span>
                <div className="flex items-center gap-1">
                  <IconSection size={20} />
                  <span>{serie.number_of_seasons} Temporadas</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <IconCalendar size={20} />
                <span>{new Date(serie.first_air_date).getFullYear()}</span>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {serie.genres.map((genre) => (
                <Chip key={genre.id} color="primary" className="text-black">
                  {genre.name}
                </Chip>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-200 leading-relaxed text-lg mt-3"
            >
              {serie.overview}
            </motion.p>
          </div>
        </article>
      </section>
      <section className="px-10 sm:px-20 pt-14 pb-5 flex flex-col gap-10">
        <SerieCast credits={credits} />
        <SimilarSeries similars={similars} categories={categories} />
      </section>
    </section>
  );
}
