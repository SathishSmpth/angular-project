import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TvComponent } from './components/pages/tv/tv.component';
import { SportsComponent } from './components/pages/sports/sports.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HeroPageComponent } from './components/pages/hero-page/hero-page.component';
import { BasicHightLight } from './directives/basic-highlight.directive';
import { DropdownDirectiveDirective } from './directives/dropdown-directive/dropdown-directive.directive';
import { UserModule } from './modules/user/user.module';
import { MoviesModule } from './modules/movies/movies.module';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        TvComponent,
        SportsComponent,
        PageNotFoundComponent,
        HeroPageComponent,
        BasicHightLight,
        DropdownDirectiveDirective,
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
