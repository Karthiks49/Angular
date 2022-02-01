import { Injectable } from '@angular/core';
import { movieList, comingSoonMoviesList, theatreDetailList, moviesFilterList, theatresFilterList, moviesInformation } from '../list';

@Injectable({
  providedIn: 'root'
})

/**
 * Gets lists of details and returns to required component. 
 * 
 * @author Karthik S
 * @version 1.0
 */
export class MovieServiceService {

  constructor() { }

  /**
   * Gets now showing movie details.
   * 
   * @returns {movieDetails[]} list of showing movie details.
   */
  public getMovieList() {
    return movieList;
  }

  /**
   * Gets coming soon movie details.
   * 
   * @returns {comingSoonMovies[]} list of coming soon movie details.
   */
  public getComingSoonMovies() {
    return comingSoonMoviesList;
  }

  /**
   * Gets theatre details.
   * 
   * @returns {theatreDetails[]} list of theatre details.
   */
  public getTheatreList() {
    return theatreDetailList;
  }

  /**
   * Gets movies filter details.
   * 
   * @returns {moviesFilterDetails[]} list of movies filter details.
   */
  public getMoviesFilterList() {
    return moviesFilterList;
  }

  /**
   * Gets theatres filter details.
   * 
   * @returns {theatresFilterDetails[]} list of theatres filter details.
   */
  public getTheatresFilterList() {
    return theatresFilterList;
  }


  public getMoviesInfo(title: string): any {
    return moviesInformation.find(p => p.title == title);
  }
}
