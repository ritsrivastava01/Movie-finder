import { IMovie } from '../app/core/movie.interface';
import { of, Subject } from 'rxjs';



export class TranslateServiceStub {
  public get(key: any): any {
    of(key);
  }
}
export const mockedMovie = <IMovie>{
  'Title': 'Bridge of Spies',
  'Year': '2015',
  'Rated': 'PG-13',
  'Released': '16 Oct 2015',
  'Runtime': '142 min',
  'Genre': 'Drama, History, Thriller',
  'Director': 'Steven Spielberg',
  'Writer': 'Matt Charman, Ethan Coen, Joel Coen',
  'Actors': 'Mark Rylance, Domenick Lombardozzi',
  'Plot': `Maximus is a powerful Roman general, loved by the people and the aging Emperor,
            Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son,
            Commodus, and a power struggle leaves Maximus and his family condemned to death.
            The powerful general is unable to save his family, and his loss of will allows him to 
            get captured and put into the Gladiator games until he dies. The only desire that fuels 
            him now is the chance to rise to the top so that he will be able to look into the eyes of
            the man who will feel his revenge.`,
  'Language': 'English, German, Russian',
  'Country': 'USA, Germany, India',
  'Awards': 'Won 1 Oscar. Another 30 wins & 97 nominations.',
  'Poster': 'https://domain.com/example.jpg',
  'Ratings': [{
    'Source': 'Internet Movie Database',
    'Value': '7.6/10'
  }, {
    'Source': 'Rotten Tomatoes',
    'Value': '91%'
  }, {
    'Source': 'Metacritic',
    'Value': '81/100'
  }],
  'Metascore': '81',
  'imdbRating': '7.6',
  'imdbVotes': '213,475',
  'imdbID': 'tt3682448',
  'Type': 'movie',
  'DVD': '02 Feb 2016',
  'BoxOffice': 'N/A',
  'Production': 'Dreamworks Pictures',
  'Website': 'http://bridgeofspies.com/',
  'Response': 'True'
};
