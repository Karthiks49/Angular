import { Component, OnInit } from '@angular/core';
import { movieDetails, comingSoonMovies, moviesFilterDetails } from 'src/app/movieInterface';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {

  activeShowing: boolean = true;
  activeSoon: boolean = false;

  movieList: movieDetails[] = [];
  comingSoonMovies : comingSoonMovies[] = [];
  moviesFilter : moviesFilterDetails[] = [];

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.movieList = this.movieService.getMovieList();
    this.moviesFilter = this.movieService.getMoviesFilterList();
  }

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
}
