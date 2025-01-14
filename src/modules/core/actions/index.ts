'use server';
import { fetchSearch } from '@/modules/core/api';

export async function searchAction(query: string) {
  return await fetchSearch(query);
}
