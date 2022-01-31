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

  @ViewChild('widgetsContent')
  widgetsContent!: ElementRef;

  @ViewChild('widgetsContent1')
  widgetsContent1!: ElementRef;

  movieList: movieDetails[] = [];
  comingSoonMovies : comingSoonMovies[] = [];

  constructor(private movieService: MovieServiceService) { 
  }

  ngOnInit(): void {
    this.movieList = this.movieService.getMovieList();
  }
  
  /**
   * Scrolls the element to left side in the given value.
   */
  scrollLeft(): void{
    this.widgetsContent.nativeElement.scrollLeft -= 278;
    this.widgetsContent1.nativeElement.scrollLeft -= 278;
  }

  /**
   * Scrolls the element to right side in the given value.
   */  
  scrollRight() : void{
    this.widgetsContent.nativeElement.scrollLeft += 278;
    this.widgetsContent1.nativeElement.scrollLeft += 278;
  }

  activeShowing: boolean = true;
  activeSoon: boolean = false;

  /**
   * Gets now showing movies list.
   */
  showNowShowing() : void{
    this.movieList = this.movieService.getMovieList();
    this.activeShowing = true;
    this.activeSoon = false;
  }

  /**
   * Gets coming soon movies list.
   */  
  showComingSoon() : void{
    this.movieList = this.movieService.getComingSoonMovies();
    this.activeShowing = false;
    this.activeSoon = true;
  }
}
