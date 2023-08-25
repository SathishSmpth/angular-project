import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMovieCardComponent } from './hero-movie-card.component';

describe('HeroMovieCardComponent', () => {
  let component: HeroMovieCardComponent;
  let fixture: ComponentFixture<HeroMovieCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroMovieCardComponent]
    });
    fixture = TestBed.createComponent(HeroMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
