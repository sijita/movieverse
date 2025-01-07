import axios from '@/lib/axios-client';

export const fetchSerieById = async (id: string) => {
  try {
    const { data } = await axios.get(`/tv/${id}?language=es-ES`);

    return data;
  } catch {
    return;
  }
};

export const fetchSerieCredits = async (id: string) => {
  try {
    const { data } = await axios.get(`/tv/${id}/credits?language=es-ES`);
    const serieCredits = data.cast;

    return serieCredits;
  } catch {
    return {};
  }
};

export const fetchSimilarSeries = async (id: string) => {
  try {
    const { data } = await axios.get(`/tv/${id}/similar?language=es-ES&page=1`);
    const similarSeries = data.results;

    return similarSeries;
  } catch {
    return {};
  }
};
