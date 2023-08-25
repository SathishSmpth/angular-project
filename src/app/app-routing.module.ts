import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TvComponent } from './components/pages/tv/tv.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { SportsComponent } from './components/pages/sports/sports.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HeroPageComponent } from './components/pages/hero-page/hero-page.component';
import { SearchComponent } from './components/pages/search/search.component';
import { HeroMovieCardComponent } from './components/shared/hero-movie-card/hero-movie-card.component';
import { UserAuthGuard } from './modules/user/user.guard';

const routes: Routes = [
  { path: '', component: HeroPageComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'shows',
    component: TvComponent,
    canActivate: [UserAuthGuard],
  },
  // {
  //   path: 'movies',
  //   component: MoviesComponent,
  //   children: [{ path: ':movieName/:id', component: HeroMovieCardComponent }],
  // },
  {
    path: 'sports',
    component: SportsComponent,
    canActivate: [UserAuthGuard],
  },
  // { path: 'search', component: SearchComponent },
  // {
  //   path: 'users',
  //   component: UsersComponent,
  //   children: [
  //     { path: '', component: ViewUserComponent },
  //     { path: 'update-user/:userId', component: EditUserComponent },
  //     { path: 'delete-user/:userId', component: DeleteUserComponent },
  //   ],
  // },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/user/user.module').then((module) => module.UserModule),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./modules/movies/movies.module').then(
        (module) => module.MoviesModule
      ),
    canActivate: [UserAuthGuard],
  },
  {
    path: 'observables',
    loadChildren: () =>
      import('./modules/observables/observables.module').then(
        (module) => module.ObservablesModule
      ),
    canActivate: [UserAuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
