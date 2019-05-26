import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRowInfoComponent } from './movie-row-info.component';

describe('MovieRowInfoComponent', () => {
  let component: MovieRowInfoComponent;
  let fixture: ComponentFixture<MovieRowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRowInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
