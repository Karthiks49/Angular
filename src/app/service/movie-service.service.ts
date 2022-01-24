import { Injectable } from '@angular/core';
import {movieDetails} from '../movieInterface';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  movieList: movieDetails[] = [];

  constructor() { }

  getMovieList() {
    this.movieList = [
      {
        movieImage :"assets/images/home/movies/rocky.jpg",
        movieName : "Rocky",
        movieContent : "Tamil | A"
      },
      {
        movieImage :"assets/images/home/movies/spiderman.jpg",
        movieName : "Spider Man No Way Home",
        movieContent : "Tamil | U/A"
      },
      {
        movieImage :"assets/images/home/movies/pushpa.jpg",
        movieName : "Pushpa",
        movieContent : "Tamil | U/A"
      },
      {
        movieImage :"assets/images/home/movies/83.jpg",
        movieName : "83",
        movieContent : "Tamil | U"
      },
      {
        movieImage :"assets/images/home/movies/writer.jpg",
        movieName : "Writer",
        movieContent : "Tamil | U/A"
      },
      {
        movieImage :"assets/images/home/movies/scream.jpg",
        movieName : "Scream",
        movieContent : "English | A"
      },
      {
        movieImage :"assets/images/home/movies/spiderman.jpg",
        movieName : "Spider Man No Way Home",
        movieContent : "English | U/A"
      },
      {
        movieImage :"assets/images/home/movies/hridhayam.jpg",
        movieName : "Hridayam",
        movieContent : "Malayalam | U/A"
      },
    ]
    return this.movieList;
  } 

}
