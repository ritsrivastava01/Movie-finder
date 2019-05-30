import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SimpleChange} from '@angular/core';
import { ReadMoreComponent } from './read-more.component';
import { CONSTANTS } from '../constants/constants';
import { mockedMovie } from '../../../assets/mocked-data';
import { By } from '@angular/platform-browser';

describe('ReadMoreComponent', () => {
  let component: ReadMoreComponent;
  let fixture: ComponentFixture<ReadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReadMoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the read more button', () => {
    component.plotText = mockedMovie.Plot;
    component.textCountLimit = CONSTANTS.PLOT_LENGTH;
    fixture.detectChanges();
    expect(component.showReadMore).toBe(true);
    expect(fixture.debugElement.query(By.css('a')).nativeElement).toBeTruthy();

  });

  it('should not show the read more button', () => {

   component.ngOnChanges({
    plotText: new SimpleChange(null, mockedMovie.Plot.substring(0, 150), false)
    });
    component.textCountLimit = CONSTANTS.PLOT_LENGTH;
    fixture.detectChanges();
    expect(component.showReadMore).toBe(false);
    expect(fixture.debugElement.query(By.css('a'))).toBeFalsy();

  });
});
