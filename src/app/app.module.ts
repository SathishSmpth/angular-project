import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShortenPipe } from './components/shared/movie-card/movie-card.shorten.pipe';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/firstComponent/firstComponent.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TvComponent } from './components/pages/tv/tv.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { SportsComponent } from './components/pages/sports/sports.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HeroPageComponent } from './components/pages/hero-page/hero-page.component';
import { UsersTableComponent } from './components/shared/users-table/users-table.component';
import { SearchComponent } from './components/pages/search/search.component';
import { MovieCardComponent } from './components/shared/movie-card/movie-card.component';
import { HeroMovieCardComponent } from './components/shared/hero-movie-card/hero-movie-card.component';
import { UsersComponent } from './components/pages/users/users.component';
import { EditUserComponent } from './components/pages/edit-user/edit-user.component';
import { ViewUserComponent } from './components/pages/view-user/view-user.component';
import { DeleteUserComponent } from './components/pages/delete-user/delete-user.component';
import { BasicHightLight } from './directives/basic-highlight.directive';
import { DropdownDirectiveDirective } from './directives/dropdown-directive/dropdown-directive.directive';
import { ShowMoreDirectiveDirective } from './directives/show-more-directive/show-more-directive.directive';
import { UserService } from './services/user.services';
import { UserModule } from './modules/user/user.module';
import { MoviesModule } from './modules/movies/movies.module';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        NavbarComponent,
        HomeComponent,
        TvComponent,
        MoviesComponent,
        SportsComponent,
        PageNotFoundComponent,
        HeroPageComponent,
        UsersTableComponent,
        SearchComponent,
        MovieCardComponent,
        ShortenPipe,
        HeroMovieCardComponent,
        UsersComponent,
        EditUserComponent,
        ViewUserComponent,
        DeleteUserComponent,
        BasicHightLight,
        DropdownDirectiveDirective,
        ShowMoreDirectiveDirective,
    ],
    exports: [
        MovieCardComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        UserModule,
        MoviesModule,
        BrowserAnimationsModule,
        SharedModule
    ]
})
export class AppModule {}
