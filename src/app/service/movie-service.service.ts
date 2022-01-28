import { Injectable } from '@angular/core';
import { movieList, comingSoonMoviesList, theatreDetailList } from '../list';

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
  getMovieList() {
    return movieList;
  }

  /**
   * Gets coming soon movie details.
   * 
   * @returns {comingSoonMovies[]} list of coming soon movie details.
   */
  getComingSoonMovies() {
    return comingSoonMoviesList;
  }

  /**
   * Gets theatre details.
   * 
   * @returns {theatreDetails[]} list of theatre details.
   */  
  getTheatreList() {
    return theatreDetailList;
  }
}
