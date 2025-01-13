'use client';
import Image from 'next/image';
import { IconCalendar, IconLink } from '@tabler/icons-react';
import { Button, Chip } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PosterCalificationChip from '@/modules/core/components/poster-calification-chip';
import type { Movie } from '@/modules/movies/types/movie';
import type { Serie } from '@/modules/series/types/serie';

export default function BentoCard({
  i,
  poster,
  categories,
}: {
  i: number;
  poster: Movie | Serie;
  categories: { id: number; name: string }[];
}) {
  return (
    <motion.div
      key={i}
      className={`relative overflow-hidden rounded-sm group border-2 border-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all ${
        poster && 'title' in poster
          ? (i === 1 || i === 5) && 'md:col-span-2 col-span-1'
          : (i === 0 || i === 6) && 'md:col-span-2 col-span-1'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <PosterCalificationChip calification={poster?.vote_average ?? 0} />
      <div>
        <Image
          src={
            poster?.poster_path
              ? `https://image.tmdb.org/t/p/w500${poster?.poster_path}`
              : '/placeholder.svg?height=500&width=300'
          }
          alt={poster && 'title' in poster ? poster?.title : poster?.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80" />
      </div>
      <div className="relative h-full p-6 flex flex-col justify-end">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white group-hover:text-primary-foreground transition-colors">
            {poster && 'title' in poster ? poster?.title : poster?.name}
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1">
              <IconCalendar size={15} className="text-primary flex-shrink-0" />
              <span className="text-sm text-gray-300">
                {new Date(
                  poster && 'title' in poster
                    ? poster?.release_date
                    : poster?.first_air_date
                ).getFullYear()}
              </span>
            </div>
            <div className="flex gap-2 overflow-auto scrollbar-hide">
              {poster?.genre_ids.slice(0, 1).map((genre, i) => (
                <Chip
                  key={i}
                  className="bg-white/20 text-white text-xs"
                  size="sm"
                >
                  {categories?.find((c) => c.id === genre)?.name}
                </Chip>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-white/80 to-white/60 backdrop-blur-sm transition-all duration-300 group-hover:h-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button
            as={Link}
            href={
              poster && 'title' in poster
                ? `/movies/${poster.id}`
                : `/series/${poster.id}`
            }
            className="rounded-sm bg-black px-6 py-2 text-sm font-bold text-white hover:bg-gray-100 hover:text-black transition-colors transform rotate-2"
            endContent={<IconLink size={15} />}
            size="sm"
          >
            Ver detalles
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
