# Movie Finder App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5. and used to search movie by title and plot.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Topic Cover

This application covers following feature:
1. Application is fully responsive on difference-difference resolution.

2. Navigation to **Search** and **Feature** tab in the header and change Language option by drop-down.

3. Application is available in two language :
    * English Language (Default)
    * Dutch Language

4. Search movie by title and plot (Full OR Short) in Imdb database by Omdb Api.

5. Feature page is already loaded by two movie:
    * Titanic
    * Gladiator 
6. Lazy load on Feature compoment


## Code Structure

The application is split in below component:
1. Shared Component:Contains all shared component across the application:
    * Header Component: Application header contains **search**, **Feature** component and Language change option.
    * Application constants
    * Movie-row-Info: used to show the movie info.
    * Read-more: read more component
2. Service:
    * Movie.service.ts: used to load the movie 
3. featured: contains below component:
    * Feature component: show the feature component
    * Feature-Movie-Layout component: used to show the featured movie in card layout
 4. Search component:
 Used to search the movie and show in card layout.
 * search component: show the search component:
 * Movie-layout component: show the searched movie in card layout.      

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Yet to come!!!
## URL
[Movie Finder](https://ritsrivastava01.github.io/Movie-finder/)
