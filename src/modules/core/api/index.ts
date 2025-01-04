import axios from '@/lib/axios-client';

export const fetchSearch = async (query: string) => {
  try {
    const { data } = await axios.get(
      `/search/multi?language=es-ES&query=${query}`
    );

    const searchResults = data.results;

    return searchResults;
  } catch {
    return [];
  }
};
