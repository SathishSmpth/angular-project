import { Component, Input } from '@angular/core';
import { Movie } from '../../pages/search/search.interface';
import { Router } from '@angular/router';
import { HttpBackend, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  movieImage!: String;
  releasedDetails!: Date;
  releasedOn: any;
  releasedDate!: any;
  releasedMonth!: any;
  releasedYear!: any;
  showDescrp: boolean = false;
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit() {
    this.movieImage = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
    this.releasedOn = this.movie.release_date?.match(/\d+/g);
    [this.releasedYear, this.releasedMonth, this.releasedDate] =
      this.releasedOn;

    this.releasedDetails = new Date(
      this.releasedYear,
      this.releasedMonth - 1,
      this.releasedDate
    );
  }
  showDescription() {
    this.showDescrp = !this.showDescrp;
  }
  defaultImage(event: Event) {
    this.movieImage = '../../../../assets/images/defaultImage.jpg';
  }
  watchNow(movie: Movie) {
    const { original_title, id } = movie;
    this.router.navigate(['movies', original_title, id]);
  }
}
