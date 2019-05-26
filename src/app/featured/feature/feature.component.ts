import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IMovie } from '../../core/movie.interface';
import { MovieService } from '../../service/movie.service';
import { forkJoin, Observable } from 'rxjs';
import { CONSTANTS } from '../../share/constants/constants';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureComponent implements OnInit {

  selectedMovies: Observable<Array<IMovie>>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    // Search 2 default movie
   this.selectedMovies = forkJoin(
      this.movieService.searchMovies('Gladiator', CONSTANTS.PLOT_FULL),
      this.movieService.searchMovies('Avengers', CONSTANTS.PLOT_FULL),
    );

  }

}
