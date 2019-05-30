import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IRating } from '../../core/rating.interface';
import { MovieRowInfoComponent } from './movie-row-info.component';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-read-more',
  template: '',
})
class ReadMoreComponent {
  @Input() textCountLimit: number;
  @Input() plotText: string;
}

describe('MovieRowInfoComponent', () => {
  let component: MovieRowInfoComponent;
  let fixture: ComponentFixture<MovieRowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
      ],
      declarations: [MovieRowInfoComponent, ReadMoreComponent]
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show text as string', () => {
    component.value = 'movie Name';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#div-normal-text')).nativeElement.innerHTML).toBe('movie Name');
  });

  it('should show list as', () => {
    component.ShowAsList = true;
    component.value = 'movie Name1, movie Name2,  movie Name3';
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
  });
});
