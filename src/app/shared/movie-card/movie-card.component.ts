import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieDetails } from 'src/app/interface/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie!: MovieDetails;
  movieImage!: String;

  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit() {
    this.movieImage = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
  }

  defaultImage(event: Event) {
    this.movieImage = '../../../../assets/images/defaultImage.jpg';
  }
  watchNow(movie: MovieDetails) {
    const { original_title, id } = movie;
    this.router.navigate(['movies', original_title, id]);
  }
}
