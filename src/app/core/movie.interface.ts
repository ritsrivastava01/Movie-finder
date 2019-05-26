import { IRating } from './rating.interface';


// Movie Interface

export interface IMovie {
    Title: string;
    Year: string;
    Poster: string;
    Rated?: string;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot: string;
    Language?: string;
    Country?: string;
    Awards: string;
    imdbRating?: string;
    imdbVotes?: string;
    Type?: string;
    Ratings?: Array<IRating>;
}
