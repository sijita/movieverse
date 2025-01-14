import axios from '@/lib/axios-client';
import { createClient } from '@/utils/supabase/server';

export const fetchFavoritesMovies = async () => {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return [];
    }

    const { data: favoriteIds } = await supabase
      .from('user_favorites')
      .select('favorite_item')
      .match({
        user_id: user.id,
        favorite_type: 'pelicula',
      })
      .throwOnError();

    if (!favoriteIds) {
      return [];
    }

    const moviePromises = favoriteIds.map(({ favorite_item }) =>
      axios.get(`/movie/${favorite_item}?language=es-ES`)
    );

    const moviesResponses = await Promise.all(moviePromises);
    const movies = moviesResponses.map((response) => response.data);

    return movies;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchFavoritesSeries = async () => {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return [];
    }

    const { data: favoriteIds } = await supabase
      .from('user_favorites')
      .select('favorite_item')
      .match({
        user_id: user.id,
        favorite_type: 'serie',
      })
      .throwOnError();

    if (!favoriteIds) {
      return [];
    }

    const seriesPromises = favoriteIds.map(({ favorite_item }) =>
      axios.get(`/tv/${favorite_item}?language=es-ES`)
    );

    const seriesResponses = await Promise.all(seriesPromises);
    const series = seriesResponses.map((response) => response.data);

    return series;
  } catch {
    return [];
  }
};
