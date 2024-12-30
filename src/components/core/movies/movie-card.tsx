import Image from 'next/image';
import { motion } from 'framer-motion';
import { Movie } from '@/types/movies';
import { IconStar } from '@tabler/icons-react';
import { Card, Chip } from '@nextui-org/react';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex w-60 h-[25rem]"
    >
      <Chip size="sm" className="absolute top-3 right-3 space-x-2 z-10 p-1">
        <div className="flex items-center gap-1">
          <IconStar size={13} className="text-yellow-400 fill-yellow-400" />
          <span className="text-white/80 text-sm font-semibold">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </Chip>
      <Card className="w-72">
        <div className="relative h-[30rem]">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          <p className="text-xl font-bold text-white line-clamp-1 text-center">
            {movie.title}
          </p>
          <p className="font-semibold text-center text-sm text-white/80">
            {new Date(movie.release_date).getFullYear()}
          </p>
          {/* <div className="flex flex-wrap gap-1">
            {movie.genre_ids.map((genre, i) => (
              <Chip
                key={i}
                className="bg-white/20 text-white text-xs"
                size="sm"
              >
                {categories.find((c) => c.id === genre)?.name}
              </Chip>
            ))}
          </div> */}
        </div>
      </Card>
    </motion.div>
  );
}
