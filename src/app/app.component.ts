import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MovieService } from './service/movie.service';
import { IMovie } from './core/movie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Movie Finder';
  constructor(private translate: TranslateService, private router: Router) {}

  /**
   * used to set the default language and navigate to search page
   * @returns void
   */
  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.router.navigate(['search']);
  }
}
