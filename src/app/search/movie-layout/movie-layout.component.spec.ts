import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLayoutComponent } from './movie-layout.component';
import { MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';
import { IRating } from '../../core/rating.interface';
import { mockedMovie } from 'src/assets/mocked-data';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-row-info',
  template: ''
})
class MovieRowInfoComponent {
  @Input() headerText: string;
  @Input() value: string | Array<IRating>;
  @Input() textCountLimit: number;
  @Input() showReadMore: boolean;
}


describe('MovieLayoutComponent', () => {
  let component: MovieLayoutComponent;
  let fixture: ComponentFixture<MovieLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        TranslateModule.forRoot(),
      ],
      declarations: [
        MovieLayoutComponent,
        MovieRowInfoComponent]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLayoutComponent);
    component = fixture.componentInstance;
    component.movie = mockedMovie;
    fixture.detectChanges();
  });

  it('should create the layout with movie', () => {
    expect(component).toBeTruthy();
    expect(fixture.debugElement.queryAll(By.directive(MovieRowInfoComponent)).length).toBe(13);

  });
});
