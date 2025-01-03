'use server';
import { cookies } from 'next/headers';

export const handleSelectTrendingKey = async (key: 'day' | 'week') => {
  const cookieStore = await cookies();
  cookieStore.set('trendingSeries', key);
};
