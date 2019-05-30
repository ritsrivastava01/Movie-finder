import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CONSTANTS } from 'src/app/share/constants/constants';
import { MovieService } from '../../service/movie.service';
import { IMovie } from '../../core/movie.interface';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchFormControlGroup: FormGroup;
  plots: Array<IPlot> = [];
  searchedMovie: IMovie;

  constructor(public movieService: MovieService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private translateService: TranslateService) { }


  ngOnInit() {

    // To populate the drop-down of plots
    this.plots = [
      { id: 0, value: CONSTANTS.PLOT_SHORT },
      { id: 1, value: CONSTANTS.PLOT_FULL }
    ];

    this.searchFormControlGroup = this.fb.group({
      inputSearch: ['', Validators.required],
      inputPlot: [this.plots[0].value]
    });


  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get frm() { return this.searchFormControlGroup.controls; }

  /**
   * Used to set value as selected
   * @param  {any} f1
   * @param  {any} f2
   * @returns boolean
   */
  compareFn = (f1: any, f2: any): boolean => {
    return f1.name === f2.name;
  }

  /**
   * Search button click handler
   */
  SearchClicked = () => {
    if (this.searchFormControlGroup.valid) {
      this.movieService.searchMovies(this.searchFormControlGroup.controls.inputSearch.value,
        this.searchFormControlGroup.controls.inputPlot.value)
        .subscribe((x: any) => {
          if (x.Response === 'True') {
            this.searchedMovie = x;
            this.translateService.get('movie-layout.movie-found', { 'title': this.searchedMovie.Title })
              .subscribe(res => {
                this.showSnackBar(res);
              });

          } else {
            this.searchedMovie = null;
            this.translateService.get('movie-layout.no-movie-found')
              .subscribe(res => {
                this.showSnackBar(res);
              });
          }

        }, err => {
          this.searchedMovie = null;
          this.translateService.get('movie-layout.no-movie-found')
              .subscribe(res => {
                this.showSnackBar(res);
              });
        });
    }
  }

  /**
  * Used to show the snack bar message
  * @param  {string} snackBarMessage: snackbar message
  * @returns void
  */
  private showSnackBar = (snackBarMessage: string): void => {
    this.snackBar.open(snackBarMessage, null, {
      duration: 2000,
    });
  }
}

// Interface Used to show the available plots in drop-down
export interface IPlot {
  id: number;
  value: string;
}
