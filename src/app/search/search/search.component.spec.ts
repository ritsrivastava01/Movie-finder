import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule, MatSelectModule, MatIconModule, MatSnackBarModule, MatInputModule, MatError } from '@angular/material';
import { Component, DebugElement, Input } from '@angular/core';
import { IMovie } from '../../core/movie.interface';
import { CONSTANTS } from '../../share/constants/constants';
import { mockedMovie } from '../../../assets/mocked-data';
import { of } from 'rxjs';
import { MovieService } from '../../service/movie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

class SearchPage {
  component: SearchComponent;
  componentDebugElement: DebugElement;

  constructor(fix: ComponentFixture<SearchComponent>) {
    this.component = fix.componentInstance;
    this.componentDebugElement = fix.debugElement;
  }

  getSearchTextBox = (): HTMLElement => this.componentDebugElement.query(By.css('input')).nativeElement;

  getSearchButton = (): HTMLElement => this.componentDebugElement.query(By.css('button')).nativeElement;

  getErrorMessageControl = (): HTMLElement => this.componentDebugElement.query(By.directive(MatError)).nativeElement;

  fillSearchTextBox = (text) => {
    this.component.searchFormControlGroup.controls['inputSearch'].setValue(text);
  }

  noMovieSection = (): HTMLElement => this.componentDebugElement.query(By.css('.no-movie')).nativeElement;
}


@Component({
  selector: 'app-movie-layout',
  template: ''
})
class MovieLayoutComponent {
  @Input() movie: IMovie;
  textLimit: number = CONSTANTS.PLOT_LENGTH;
}
const logServiceStub = {
  searchMovies: (title: string, plot: string) => {
    return title === 'Bridge of Spies' ? of(mockedMovie) : of({ 'Response': 'False' });
  }

};

describe('SearchComponent', () => {
  let page: SearchPage;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatSnackBarModule,
        MatInputModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
      ],
      declarations: [
        SearchComponent,
        MovieLayoutComponent
      ],
      providers: [
        { provide: MovieService, useValue: logServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    page = new SearchPage(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page.component).toBeTruthy();
  });

  it('should handle the search button without search text', () => {
    page.getSearchButton().click();
    fixture.detectChanges();
    expect(page.getErrorMessageControl()).toBeTruthy();
    expect(page.component.searchFormControlGroup.valid).toBe(false);
  });

  it('should handle the search button click', () => {
    page.fillSearchTextBox('Bridge of Spies');
    fixture.detectChanges();
    expect(page.component.searchFormControlGroup.valid).toBe(true);
    page.getSearchButton().click();
    fixture.detectChanges();
    expect(page.component.searchedMovie).toEqual(mockedMovie);
  });

  it('should handle the movie not found response', () => {
    page.fillSearchTextBox('movie-not-found');
    fixture.detectChanges();
    expect(page.component.searchFormControlGroup.valid).toBe(true);
    page.getSearchButton().click();
    fixture.detectChanges();
    expect(page.component.searchedMovie).toEqual(null);
    expect(page.noMovieSection()).toBeTruthy();
  });
});
