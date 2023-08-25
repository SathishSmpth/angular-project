import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ShortenPipe } from './movie-card/shorten.pipe';
import { LoaderIndicatorLdsComponent } from './loader-indicator-lds/loader-indicator-lds.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [MovieCardComponent, ShortenPipe, LoaderIndicatorLdsComponent, LoaderComponent],
  exports: [MovieCardComponent, LoaderIndicatorLdsComponent,LoaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
