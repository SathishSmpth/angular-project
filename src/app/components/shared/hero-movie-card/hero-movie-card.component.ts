import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../pages/search/search.interface';

@Component({
  selector: 'app-hero-movie-card',
  templateUrl: './hero-movie-card.component.html',
  styleUrls: ['./hero-movie-card.component.css'],
})
export class HeroMovieCardComponent {
  movie!: Movie;
  backdrop!: string;
  image!: string;
  id!: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMovie();
  }
  getMovie() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzkyOTFjM2RjNjY3ZDJmZmMwZmUyY2U2MjdmYzdkOCIsInN1YiI6IjY0MzdhYWU0NGE1MmY4MDBmNGY3MmViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DbTKr-WSoG7aVy78z_cZtd-GH7NdmE_qbcxSh9z1swY',
      },
    };

    this.http
      .get<Movie>(
        `https://api.themoviedb.org/3/movie/${this.id}?language=en-US`,
        options
      )
      .subscribe((response) => {
        this.movie = response;

        this.backdrop = `https://image.tmdb.org/t/p/w500${this.movie.backdrop_path}`;
        this.image = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
      });
  }

  defaultImage(event: Event) {
    this.image = '../../../../assets/images/defaultImage.jpg';
  }
  defaultBackDrop(event: Event) {
    this.backdrop = '../../../../assets/images/defaultImage.jpg';
  }
}
