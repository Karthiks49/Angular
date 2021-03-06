export interface movieDetails {
  movieImage: string;
  movieName: string;
  movieContent: string;
}

export interface comingSoonMovies {
  movieImage : string;
  movieName: string;
  movieContent: string;
}

export interface theatreDetails {
  theatreName : string;
  theatreContent : string[];
}

export interface moviesFilterDetails {
  heading : string;
  content : string[];
}

export interface theatresFilterDetails {
  heading : string;
  content : string[];
}

export interface movieInfo {
  title: string;
  poster: string;
  language: string;
  genreAndDuration: string[];
  actors: string[];
  director: string;
  musicDirector: string;
  synopsis: string;
}