import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMovieLayoutComponent } from './featured-movie-layout.component';
import { IMovie } from '../../core/movie.interface';
import { IRating } from '../../core/rating.interface';
import { Input, Component } from '@angular/core';
import { MatCardModule, MatCardTitle, MatCardSubtitle } from '@angular/material';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TranslateServiceStub, mockedMovie } from '../../../assets/mocked-data';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-row-info',
  template: ''
})
class MovieRowInfoComponent {
  @Input() headerText: string;
  @Input() value: string | Array<IRating>;
}


describe('FeaturedMovieLayoutComponent', () => {
  let component: FeaturedMovieLayoutComponent;
  let fixture: ComponentFixture<FeaturedMovieLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        FeaturedMovieLayoutComponent,
        MovieRowInfoComponent
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedMovieLayoutComponent);

    component = fixture.componentInstance;

  });

  it('should create', () => {
    component.movie = mockedMovie;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const matCardTitle: HTMLElement = fixture.debugElement.query(By.directive(MatCardTitle)).nativeElement;
    const matCardSubTitle: HTMLElement = fixture.debugElement.query(By.directive(MatCardSubtitle)).nativeElement;
    expect(matCardTitle.innerHTML).toBe(mockedMovie.Title);
    expect(matCardSubTitle.innerHTML).toBe(mockedMovie.Year);

  });
});
