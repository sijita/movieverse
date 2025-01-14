'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Movie } from '@/modules/movies/types/movie';
import { IconCalendar, IconLink } from '@tabler/icons-react';
import { Button, Chip } from '@nextui-org/react';
import Link from 'next/link';
import { Serie } from '@/modules/series/types/serie';
import PosterCalificationChip from './poster-calification-chip';
import FavoriteButton from './ui/favorite-button';

export default function PosterCard({
  poster,
  categories,
  additionalClass,
  onCloseSearchModal,
}: {
  poster: Movie | Serie;
  categories?: { id: number; name: string }[];
  additionalClass?: string;
  onCloseSearchModal?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      viewport={{ once: true }}
      className={`${additionalClass}`}
    >
      <div className="relative overflow-hidden rounded-sm group aspect-[2/3] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all h-full">
        <PosterCalificationChip calification={poster?.vote_average ?? 0} />
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster?.poster_path}`}
            alt={'title' in poster ? poster?.title : poster?.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80" />
        </div>
        <div className="relative h-full p-6 flex flex-col justify-end">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white group-hover:text-primary-foreground transition-colors">
              {'title' in poster ? poster?.title : poster?.name}
            </h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1">
                <IconCalendar
                  size={15}
                  className="text-primary flex-shrink-0"
                />
                <span className="text-sm text-gray-300">
                  {'release_date' in poster
                    ? poster?.release_date &&
                      new Date(poster?.release_date).getFullYear()
                    : poster?.first_air_date &&
                      new Intl.DateTimeFormat('es-ES', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      }).format(new Date(poster?.first_air_date))}
                </span>
              </div>
              {categories &&
                poster?.genre_ids &&
                poster?.genre_ids.slice(0, 1).map((genre, i) => (
                  <Chip
                    key={i}
                    className="bg-white/20 text-white text-xs rounded-sm"
                    size="sm"
                  >
                    {categories.find((c) => c.id === genre)?.name}
                  </Chip>
                ))}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-white/80 to-white/60 backdrop-blur-sm transition-all duration-300 group-hover:h-1/3 flex items-center gap-2 justify-center opacity-0 group-hover:opacity-100">
            <Button
              as={Link}
              href={
                'title' in poster
                  ? `/movies/${poster?.id}`
                  : `/series/${poster?.id}`
              }
              className="rounded-sm bg-black px-6 py-2 text-sm font-bold text-white hover:bg-gray-100 hover:text-black transition-colors transform -rotate-2"
              onPress={onCloseSearchModal}
              endContent={<IconLink size={15} />}
            >
              Ver detalles
            </Button>
            <FavoriteButton
              id={poster?.id.toString() ?? ''}
              type={'title' in poster ? 'Película' : 'Serie'}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
