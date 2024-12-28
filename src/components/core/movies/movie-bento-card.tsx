'use client';
import Image from 'next/image';
import { IconStar } from '@tabler/icons-react';
import { Movie } from '@/types/movies';
import { Card, CardBody, Chip } from '@nextui-org/react';

export default function MovieBentoCard({
  i,
  movie,
  categories,
}: {
  i: number;
  movie: Movie;
  categories: { id: number; name: string }[];
}) {
  return (
    <Card
      key={i}
      className={`row-span-1 hover:scale-95 cursor-pointer transition-all border-none ${
        i === 3 || i === 6 ? 'col-span-2' : ''
      }`}
    >
      <CardBody className="p-0 relative">
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : '/placeholder.svg?height=500&width=300'
          }
          alt={movie.title}
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center gap-2 mb-1">
            <IconStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-smñ font-semibold">
              {movie.vote_average}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{movie.title}</h3>
          <div className="flex gap-2 overflow-auto scrollbar-hide">
            {movie.genre_ids.map((genre, i) => (
              <Chip
                key={i}
                className="bg-white/20 text-white text-xs"
                size="sm"
              >
                {categories.find((c) => c.id === genre)?.name}
              </Chip>
            ))}
            <Chip className="text-black" color="primary" size="sm">
              {movie.release_date}
            </Chip>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
