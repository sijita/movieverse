import axios from '@/lib/axios-client';

export const fetchMovieById = async (id: string) => {
  try {
    const { data } = await axios.get(`/movie/${id}?language=es-ES`);

    return data;
  } catch {
    return;
  }
};

export const fetchSimilarMovies = async (id: string) => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/similar?language=es-ES&page=1`
    );
    const similarMovies = data.results;

    return similarMovies;
  } catch {
    return {};
  }
};

export const fetchMovieCredits = async (id: string) => {
  try {
    const { data } = await axios.get(`/movie/${id}/credits?language=es-ES`);
    const movieCredits = data.cast;

    return movieCredits;
  } catch {
    return {};
  }
};

export const fetchMovieTrailer = async (id: string) => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/videos?language=es-ES&page=1`
    );
    const movieTrailer = data.results[0].key;

    return movieTrailer;
  } catch {
    return '';
  }
};
