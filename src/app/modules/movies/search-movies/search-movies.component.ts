import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SearchResults } from 'src/app/components/pages/search/search.interface';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          'background-color': 'red',
        })
      ),
      state(
        'highlight',
        style({
          'background-color': 'green',
        })
      ),
    ]),

  ],
})
export class SearchMoviesComponent {
  searchMovies: string = '';
  searchPageStyle: Record<string, string> = {};
  state!: string;
  searchResults!: SearchResults;
  constructor(private http: HttpClient) {
    this.state = 'normal';
  }

  onSearch() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTU2N2FjNjA2MzdkN2VmNWY5OGMzMzYwYjgwNjQyNSIsInN1YiI6IjY0NzE5NWIzODgxM2U0MDBlMmQ3ZGFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Cxx_oGZI9ilRBojSdAf3-e97OBYyfFjJ3gdn1gNyMY',
      },
    };
    const url = `https://api.themoviedb.org/3/search/movie?query=${this.searchMovies}&include_adult=false&language=en-US&page=1`;
    this.get(options, url);
    this.state = this.searchMovies ? 'highlight' : 'normal';
  }

  private get(options: object, url: string) {
    this.http.get<SearchResults>(url, options).subscribe((response) => {
      this.searchResults = response;
    });
  }
}
