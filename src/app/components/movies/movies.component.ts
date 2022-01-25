import { Component, OnInit } from '@angular/core';
import { movieDetails } from 'src/app/movieInterface';
import { comingSoonMovies } from 'src/app/movieInterface';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movieList: movieDetails[] = [];
  comingSoonMovies : comingSoonMovies[] = [];

  constructor(private movieService: MovieServiceService) { 
  }

  ngOnInit(): void {

    this.movieList = this.movieService.getMovieList();
    this.comingSoonMovies = this.movieService.getComingSoonMovies();

    let nowShowingMovies = document.getElementById("nowShowingMovies");
    let comingSoonMovies = document.getElementById("comingSoonMovies");

    let nowShowing = document.getElementById("nowShowing");
    nowShowing?.classList.add("active");
    let comingSoon  = document.getElementById("comingSoon");
    comingSoon?.addEventListener("click", function() {
      nowShowing?.classList.remove("active");
      comingSoon?.classList.add("active");
      nowShowingMovies?.classList.remove("display-flex");
      nowShowingMovies?.classList.add("display-none");
      comingSoonMovies?.classList.remove("display-none");
      comingSoonMovies?.classList.add("display-flex");
    });
    nowShowing?.addEventListener("click", function() {
      comingSoon?.classList.remove("active");
      nowShowing?.classList.add("active");
      nowShowingMovies?.classList.remove("display-none");
      nowShowingMovies?.classList.add("display-flex");
      comingSoonMovies?.classList.remove("display-flex");
      comingSoonMovies?.classList.add("display-none");
    });
  }

}
