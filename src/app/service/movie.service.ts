import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../core/movie.interface';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private searchUrl = 'https://www.omdbapi.com/';
  private apiKey = '6c3a2d45';


  constructor(private httpClient: HttpClient) { }

  // Movie search service call
  searchMovies = (title: string, plot: string): Observable<IMovie> => {
    const searchUrl = `${this.searchUrl}?apiKey=${this.apiKey}&t=${title}&plot=${plot}`;
    return this.httpClient.get<IMovie>(searchUrl, { responseType: 'json' });
  }
}
