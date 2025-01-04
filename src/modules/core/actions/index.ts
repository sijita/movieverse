'use server';
import { fetchSearch } from '../api';

export async function searchAction(query: string) {
  return await fetchSearch(query);
}
