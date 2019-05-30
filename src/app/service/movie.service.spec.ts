import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { mockedMovie } from '../../assets/mocked-data';
import { IMovie } from '../core/movie.interface';
import { of } from 'rxjs';

describe('MovieService', () => {
  let service: MovieService;
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MovieService(<any>httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the mapped movie', () => {
    httpClientSpy.get.and.returnValue(of(mockedMovie));
    service.searchMovies('Bridge of Spies', 'full')
      .subscribe((x: IMovie) => {
        expect(x).toEqual(mockedMovie);
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
      });

  });
});
