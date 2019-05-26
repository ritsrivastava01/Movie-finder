import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMovieLayoutComponent } from './featured-movie-layout.component';

describe('FeaturedMovieLayoutComponent', () => {
  let component: FeaturedMovieLayoutComponent;
  let fixture: ComponentFixture<FeaturedMovieLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedMovieLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedMovieLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
