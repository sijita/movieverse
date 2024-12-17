'use client';
import { Button } from '@nextui-org/react';
import { IconHeart, IconPlayerPlayFilled } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero({
  movie,
}: {
  movie: {
    id: number;
    backdrop_path: string;
    title: string;
    release_date: string;
  };
}) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[40rem] relative p-10">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        width={1280}
        height={720}
        alt={movie.title}
        className="object-cover w-full h-full absolute z-0 filter brightness-50 blur-sm"
        priority
      />
      <div className="flex flex-col items-center justify-center gap-5 z-10">
        <h1 className="lg:text-5xl text-4xl text-center text-inherit font-bold drop-shadow-lg">
          Bienvenido a MovieVerse
        </h1>
        <p className="text-xl font-medium drop-shadow-lg text-center">
          Encontraras las mejores peliculas y series
        </p>
      </div>
      <div className="flex flex-col gap-5 absolute bottom-5 xl:left-[10rem] xl:bottom-[10rem] rounded-full sm:w-96 w-60">
        <div>
          <h2 className="text-inherit text-4xl font-bold">{movie.title}</h2>
          {movie.release_date && (
            <p className="text-gray-400 text-lg font-semibold">
              {new Date(movie.release_date).getFullYear()}
            </p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
          <Button
            className="text-md text-black font-semibold uppercase"
            radius="full"
            color="primary"
            href={`/movies/${movie.id}`}
            as={Link}
          >
            <IconPlayerPlayFilled size={20} />
          </Button>
          <Button variant="flat" radius="full" isIconOnly>
            <IconHeart size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
