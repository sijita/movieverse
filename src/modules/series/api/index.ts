import axios from '@/lib/axios-client';

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
