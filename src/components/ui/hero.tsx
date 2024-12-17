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
    <section className="flex flex-col items-center justify-center min-h-[50rem] relative p-10">
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
          <h2 className="text-inherit text-3xl font-semibold">{movie.title}</h2>
          {movie.release_date && (
            <p className="text-gray-500 text-lg font-medium">
              {new Date(movie.release_date).getFullYear()}
            </p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
          <Link className="w-full" href={`/movies/${movie.id}`}>
            <Button
              className="text-md text-black font-semibold w-full uppercase"
              radius="full"
              color="primary"
              endContent={<IconPlayerPlayFilled size={15} />}
            >
              Ver mas
            </Button>
          </Link>
          <Button variant="flat" radius="full" isIconOnly>
            <IconHeart size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
