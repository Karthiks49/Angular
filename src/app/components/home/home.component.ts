import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { movieDetails } from 'src/app/movieInterface';
import { comingSoonMovies } from 'src/app/movieInterface';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieList: movieDetails[] = [];
  comingSoonMovies : comingSoonMovies[] = [];

  constructor(private movieService: MovieServiceService) { 
  }
  
  @ViewChild('widgetsContent')
  widgetsContent!: ElementRef;

  @ViewChild('widgetsContent1')
  widgetsContent1!: ElementRef;

  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 278;
    this.widgetsContent1.nativeElement.scrollLeft -= 278;
  }

  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 278;
    this.widgetsContent1.nativeElement.scrollLeft += 278;
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
