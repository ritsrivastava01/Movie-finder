import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IMovie } from '../../core/movie.interface';

@Component({
  selector: 'app-featured-movie-layout',
  templateUrl: './featured-movie-layout.component.html',
  styleUrls: ['./featured-movie-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedMovieLayoutComponent {

  @Input() movie: IMovie;
  constructor() { }

}
