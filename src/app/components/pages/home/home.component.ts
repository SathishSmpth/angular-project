import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NowPlayingMoviesResponse } from 'src/app/interface/nowPlaying.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  playingMovies!: NowPlayingMoviesResponse;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzQxM2NjN2I4MGEwYTU5ZTY4Y2I0MDc5YWMxYWNhYyIsInN1YiI6IjYzM2Y5NmFmZDM1ZGVhMDA4MTc5ODA5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xHntEK4E9TcpCMhZbke9OqmxOiPiQj5h6nFSEpH77I0',
      },
    };

    this.http
      .get<NowPlayingMoviesResponse>(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        options
      )
      .subscribe((res) => {
        this.playingMovies = res;
      });
  }

}
