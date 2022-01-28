import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie-service.service';
import { theatreDetails } from 'src/app/movieInterface';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.scss']
})

/**
 * Gets lists of details and returns to required component. 
 * 
 * @author Karthik S
 * @version 1.0
 */
export class TheatresComponent implements OnInit {

  theatreDetails: theatreDetails[] = [];

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.theatreDetails = this.movieService.getTheatreList();
  }
}
