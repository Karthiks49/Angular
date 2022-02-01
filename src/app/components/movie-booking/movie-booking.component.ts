import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { movieInfo } from 'src/app/movieInterface';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.scss']
})
export class MovieBookingComponent implements OnInit {
  sub: Subscription = new Subscription;
  movieName: any;

  movie: movieInfo = {
    title: "",
    poster: "",
    language: "",
    genreAndDuration: [],
    actors: [],
    director: "",
    musicDirector: "",
    synopsis: ""
  }
  constructor(private movieService: MovieServiceService, private Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub=this.Activatedroute.paramMap.subscribe(params => {
      this.movieName = params.get('movieName');
      this.movie = this.movieService.getMoviesInfo(this.movieName);
   });
  }
}
