'use client';
import { Chip } from '@nextui-org/react';
import { Serie } from '../types/serie';
import { motion } from 'framer-motion';
import { IconCalendar, IconStar } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SerieBentoCard({
  i,
  serie,
  categories,
}: {
  i: number;
  serie: Serie;
  categories: { id: number; name: string }[];
}) {
  return (
    <motion.div
      key={i}
      className={`relative overflow-hidden rounded-xl group ${
        (i === 0 || i === 6) && 'md:col-span-2 col-span-1'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Chip size="sm" className="absolute top-3 right-3 space-x-2 z-10 p-1">
        <div className="flex items-center gap-1">
          <IconStar size={13} className="text-yellow-400 fill-yellow-400" />
          <span className="text-white/80 text-sm font-semibold">
            {serie?.vote_average.toFixed(1)}
          </span>
        </div>
      </Chip>
      <div>
        <Image
          src={
            serie?.poster_path
              ? `https://image.tmdb.org/t/p/w500${serie?.poster_path}`
              : '/placeholder.svg?height=500&width=300'
          }
          alt={serie?.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80" />
      </div>
      <div className="relative h-full p-6 flex flex-col justify-end">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white group-hover:text-primary-foreground transition-colors">
            {serie?.name}
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1">
              <IconCalendar size={15} className="flex-shrink-0" />
              <span className="text-sm text-gray-300">
                {serie?.first_air_date &&
                  new Intl.DateTimeFormat('es-ES', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  }).format(new Date(serie?.first_air_date))}
              </span>
            </div>
            <div className="flex gap-2 overflow-auto scrollbar-hide">
              {serie?.genre_ids.slice(0, 1).map((genre, i) => (
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
        <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-primary/80 to-primary/60 backdrop-blur-sm transition-all duration-300 group-hover:h-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link
            href={`/movies/${serie?.id}`}
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
