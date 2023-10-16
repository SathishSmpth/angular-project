import { MovieDetails } from './movie.interface';

export interface NowPlayingMoviesResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieDetails[];
  total_pages: number;
  total_results: number;
}
