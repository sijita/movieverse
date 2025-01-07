import axios from '@/lib/axios-client';

export const fetchRecommendationsByMovie = async (id: string) => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/recommendations?language=es-ES&page=1`
    );
    const recommendations = data.results;

    return recommendations;
  } catch {
    return {};
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
