import { Component, OnInit } from '@angular/core';
import { movieDetails } from 'src/app/movieInterface';
import { comingSoonMovies } from 'src/app/movieInterface';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

/**
 * Gets lists of details and returns to required component. 
 * 
 * @author Karthik S
 * @version 1.0
 */
export class MoviesComponent implements OnInit {

  movieList: movieDetails[] = [];
  comingSoonMovies : comingSoonMovies[] = [];

  constructor(private movieService: MovieServiceService) { 
  }

  activeShowing: boolean = true;
  activeSoon: boolean = false;

  /**
   * Gets now showing movies list.
   */ 
  showNowShowing() {
    this.movieList = this.movieService.getMovieList();
    this.activeShowing = true;
    this.activeSoon = false;
  }

  /**
   * Gets coming soon movies list.
   */    
  showComingSoon() {
    this.movieList = this.movieService.getComingSoonMovies();
    this.activeShowing = false;
    this.activeSoon = true;
  }

  ngOnInit(): void {
    this.movieList = this.movieService.getMovieList();
  }
}
