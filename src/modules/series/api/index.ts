import axios from '@/lib/axios-client';

export const fetchPopularSeries = async () => {
  try {
    const { data } = await axios.get('/tv/popular?language=es-ES&page=1');
    const popularSeries = data.results;

    return popularSeries;
  } catch {
    return [];
  }
};

export const fetchRandomSerie = async () => {
  try {
    const { data } = await axios.get(
      '/discover/tv?language=es-ES&page=1&year=2024'
    );

    const randomSerie = data.results;
    const randomIndex = Math.floor(Math.random() * randomSerie.length);
    const serie = randomSerie[randomIndex];

    return serie;
  } catch {
    return [];
  }
};

export const fetchTrendingSeries = async (time: 'day' | 'week') => {
  try {
    const { data } = await axios.get(`/trending/tv/${time}?language=es-ES`);
    const series = data.results;

    return series;
  } catch {
    return [];
  }
};

export const fetchSeriesCategories = async () => {
  try {
    const { data } = await axios.get('/genre/tv/list?language=es-ES');
    const categories = data.genres;

    return categories;
  } catch {
    return [];
  }
};

export const fetchSeriesByCategory = async (id: string) => {
  try {
    const { data } = await axios.get(
      `/discover/tv?with_genres=${id}&language=es-ES`
    );
    const series = data.results;

    return series;
  } catch {
    return [];
  }
};

export const fetchLatestSeries = async () => {
  try {
    const { data } = await axios.get('/tv/latest?language=es-ES&page=1');

    return data;
  } catch {
    return [];
  }
};

export const fetchTopRatedSeries = async () => {
  try {
    const { data } = await axios.get('/tv/top_rated?language=es-ES&page=1');
    const topRatedSeries = data.results;

    return topRatedSeries;
  } catch {
    return [];
  }
};

export const fetchOnAirSeries = async () => {
  try {
    const { data } = await axios.get('/tv/on_the_air?language=es-ES&page=1');
    const onAirSeries = data.results;

    return onAirSeries;
  } catch {
    return [];
  }
};
