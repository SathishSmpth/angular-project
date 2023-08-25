import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { SearchResults } from './search.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchMovies: string = '';
  searchPageStyle: Record<string, string> = {};
  searchResults!: SearchResults;
  constructor(private http: HttpClient) {}

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
    this.setSearchPageStyle()
  }
  setSearchPageStyle() {
    this.searchPageStyle = {
      'background-color': 'black',
      'text-color': 'white',
    };
  }

  private get(options: object, url: string) {
    this.http.get<SearchResults>(url, options).subscribe((response) => {
      this.searchResults = response;
    });
  }
}
