import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IMovie } from '../../core/movie.interface';
import { CONSTANTS } from '../../share/constants/constants';

@Component({
  selector: 'app-movie-layout',
  templateUrl: './movie-layout.component.html',
  styleUrls: ['./movie-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieLayoutComponent {
  @Input() movie: IMovie;
  textLimit: number = CONSTANTS.PLOT_LENGTH;

  constructor() { }

}
