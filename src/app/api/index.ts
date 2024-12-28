import axios from '@/utils/lib/axios-client';

export const fetchRandomMovie = async () => {
  try {
    const { data } = await axios.get(
      '/discover/movie?language=es-ES&page=1&year=2024'
    );

    const randomMovie = data.results;
    const randomIndex = Math.floor(Math.random() * randomMovie.length);
    const movie = randomMovie[randomIndex];

    return movie;
  } catch {
    return [];
  }
};

export const fetchMoviesCategories = async () => {
  try {
    const { data } = await axios.get('/genre/movie/list?language=es-ES');
    const categories = data.genres;

    return categories;
  } catch {
    return [];
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const { data } = await axios.get('/movie/top_rated?language=es-ES&page=1');
    const topRatedMovies = data.results;

    return topRatedMovies;
  } catch {
    return [];
  }
};

export const fetchPopularMovies = async () => {
  try {
    const { data } = await axios.get('/movie/popular?language=es-ES&page=1');
    const popularMovies = data.results;

    return popularMovies;
  } catch {
    return [];
  }
};

export const fetchMoviesByCategory = async (id: string) => {
  try {
    const { data } = await axios.get(
      `/discover/movie?with_genres=${id}&language=es-ES`
    );
    const movies = data.results;

    return movies;
  } catch {
    return [];
  }
};
