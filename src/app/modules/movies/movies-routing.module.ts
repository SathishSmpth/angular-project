import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';

const routes: Routes = [
  { path: 'search', component: SearchMoviesComponent },
  { path: ':movieName/:id', component: ViewMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
