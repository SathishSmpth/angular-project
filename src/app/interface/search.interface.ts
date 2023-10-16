import { MovieDetails } from './movie.interface';

export interface SearchResults {
  page: number;
  results: MovieDetails[];
  total_pages: number;
  total_results: number;
}
