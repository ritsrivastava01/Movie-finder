import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { FeatureComponent } from './feature.component';
import { HttpClientModule } from '@angular/common/http';
import { FeaturedMovieLayoutComponent } from '../featured-movie-layout/featured-movie-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { IMovie } from '../../core/movie.interface';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'src/app/share/shared.module';
import { MovieService } from '../../service/movie.service';
import { DebugElement } from '@angular/core';


class FeaturePage {
  componentDebugElement: DebugElement;
  component: FeatureComponent;

  constructor(fix: ComponentFixture<FeatureComponent>) {
    this.component = fix.componentInstance;
    this.componentDebugElement = fix.debugElement;
  }

  featureMovieLayoutCard = (): DebugElement[] => this.componentDebugElement.queryAll(By.directive(FeaturedMovieLayoutComponent));
}

describe('FeatureComponent', () => {

  let fixture: ComponentFixture<FeatureComponent>;
  let page: FeaturePage;

  const logServiceStub = {
    searchMovies: (title: string, plot: string) => {
      const logs: IMovie[] = [
        <IMovie>{ Title: title, }
      ];
      return of(logs);
    }
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatCardModule,
        SharedModule,
        TranslateModule.forRoot(),

      ],
      declarations: [
        FeatureComponent,
        FeaturedMovieLayoutComponent,
      ],
      providers: [
        { provide: MovieService, useValue: logServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {


    fixture = TestBed.createComponent(FeatureComponent);
    page = new FeaturePage(fixture);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(page.component).toBeTruthy();
  });

  it('should create the component with two feature movie', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(page.featureMovieLayoutCard().length).toBe(2);
  }));
});
