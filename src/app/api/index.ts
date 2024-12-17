import axios from '@/utils/lib/axios-client';

export const fetchRandomMovie = async () => {
  const fetchRandomMovie = await axios.get(
    '/discover/movie?language=es-ES&page=1&year=2024'
  );

  const randomMovie = fetchRandomMovie.data.results;
  const randomIndex = Math.floor(Math.random() * randomMovie.length);
  const movie = randomMovie[randomIndex];

  return movie;
};
