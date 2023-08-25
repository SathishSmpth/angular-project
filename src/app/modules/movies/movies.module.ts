import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieCardComponent } from 'src/app/components/shared/movie-card/movie-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MoviesComponent,
    SearchMoviesComponent,
    ViewMoviesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    SharedModule
  ],
})
export class MoviesModule {}
