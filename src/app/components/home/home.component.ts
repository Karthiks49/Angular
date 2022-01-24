import { Component, OnInit } from '@angular/core';
import { movieDetails } from 'src/app/movieInterface';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieList: movieDetails[] = [];

  constructor(private movieService: MovieServiceService) { 

  }

  ngOnInit(): void {

    
    this.movieList = this.movieService.getMovieList();

    let nowShowing = document.getElementById("nowShowing");
    nowShowing?.classList.add("active");
    let comingSoon  = document.getElementById("comingSoon");
    comingSoon?.addEventListener("click", function() {
      nowShowing?.classList.remove("active");
      comingSoon?.classList.add("active");
    });
    nowShowing?.addEventListener("click", function() {
      comingSoon?.classList.remove("active");
      nowShowing?.classList.add("active");
    });
  }
}
