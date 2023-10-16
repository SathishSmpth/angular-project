import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TvComponent } from './components/pages/tv/tv.component';
import { SportsComponent } from './components/pages/sports/sports.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HeroPageComponent } from './components/pages/hero-page/hero-page.component';
import { AuthGuard } from './services/user.guard';

const routes: Routes = [
  { path: '', component: HeroPageComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shows',
    component: TvComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sports',
    component: SportsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/user/user.module').then((module) => module.UserModule),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./modules/movies/movies.module').then(
        (module) => module.MoviesModule
      ),
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
