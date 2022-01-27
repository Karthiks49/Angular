import { Injectable } from '@angular/core';
import { movieDetails } from '../movieInterface';
import { comingSoonMovies } from '../movieInterface';
import { theatreDetails } from '../movieInterface';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  movieList: movieDetails[] = [];
  comingSoonMovies: comingSoonMovies[] = [];
  theatreDetails: theatreDetails[] = [];

  constructor() { }

  
  getMovieList() {
    this.movieList = [
      {
        movieImage: "assets/images/home/movies/nowShowing/rocky.jpg",
        movieName: "Rocky",
        movieContent: "Tamil | A"
      },
      {
        movieImage: "assets/images/home/movies/nowShowing/silaNerangalil.jpg",
        movieName: "Sila Nerangalil Sila Manidhargal",
        movieContent: "Tamil | U"
      },
      {
        movieImage: "assets/images/home/movies/nowShowing/spiderman.jpg",
        movieName: "Spider Man No Way Home",
        movieContent: "Tamil | U/A"
      },
      {
        movieImage: "assets/images/home/movies/nowShowing/maanadu.jpg",
        movieName: "Maanadu",
        movieContent: "Tamil | U"
      },
      {
        movieImage: "assets/images/home/movies/nowShowing/pushpa.jpg",
        movieName: "Pushpa",
        movieContent: "Tamil | U/A"
      },
      {
        movieImage: "assets/images/home/movies/nowShowing/83.jpg",
        movieName: "83",
        movieContent: "Tamil | U"
      },
      {
        movieImage: "assets/images/home/movies/nowShowing/kingsMan.jpg",
        movieName: "The Kings Man",
        movieContent: "English | A"
      },
      {
        movieImage: "assets/images/home/movies/nowShowing/writer.jpg",
        movieName: "Writer",
        movieContent: "Tamil | U/A"
      },
      {
        movieImage: "assets/images/home/movies/nowShowing/scream.jpg",
        movieName: "Scream",
        movieContent: "English | A"
      },
      {
        movieImage: "assets/images/home/movies/nowShowing/spiderman.jpg",
        movieName: "Spider Man No Way Home",
        movieContent: "English | U/A"
      },
      {
        movieImage: "assets/images/home/movies/nowShowing/hridhayam.jpg",
        movieName: "Hridayam",
        movieContent: "Malayalam | U/A"
      },
      {
        movieImage: "assets/images/home/movies/nowShowing/355.jpg",
        movieName: "The 355",
        movieContent: "English | U/A"
      },
      {
        movieImage: "assets/images/home/movies/nowShowing/bangaraju.jpg",
        movieName: "Bangarraju",
        movieContent: "Telugu | U"
      }
    ]
    return this.movieList;
  }

  getComingSoonMovies() {
    this.comingSoonMovies = [
      {
        movieImage: "assets/images/home/movies/comingSoon/vikram.jpg",
        movieName: "Vikram",
        movieContent: "Tamil | U/A"
      },
      {
        movieImage: "assets/images/home/movies/comingSoon/valimai.jpg",
        movieName: "Valimai",
        movieContent: "Tamil | U"
      },
      {
        movieImage: "assets/images/home/movies/comingSoon/ponniyinSelvan.jpg",
        movieName: "Ponniyin Selvan Part : One",
        movieContent: "Tamil | U/A"
      },
      {
        movieImage: "assets/images/home/movies/comingSoon/beast.jpg",
        movieName: "Beast",
        movieContent: "Tamil | U"
      },
      {
        movieImage: "assets/images/home/movies/comingSoon/batman.jpg",
        movieName: "The Batman",
        movieContent: "English | U/A"
      },
      {
        movieImage: "assets/images/home/movies/comingSoon/maaran.jpg",
        movieName: "Maaran",
        movieContent: "Tamil | U"
      },
      {
        movieImage: "assets/images/home/movies/comingSoon/viduthalai.jpg",
        movieName: "Viduthalai",
        movieContent: "Tamil | U/A"
      },
      {
        movieImage: "assets/images/home/movies/comingSoon/venthuThaninthathuKaadu.jpg",
        movieName: "Venthu Thanninthathu Kaadu",
        movieContent: "Tamil | U"
      },
      {
        movieImage: "assets/images/home/movies/comingSoon/uncharted.jpg",
        movieName: "Uncharted",
        movieContent: "English | U"
      },
      {
        movieImage: "assets/images/home/movies/comingSoon/magaan.jpg",
        movieName: "Mahaan",
        movieContent: "Tamil | U/A"
      },
      {
        movieImage: "assets/images/home/movies/comingSoon/bheeshmaParvam.jpg",
        movieName: "Bheshma Parvam",
        movieContent: "Malayalam | U"
      },
      {
        movieImage: "assets/images/home/movies/comingSoon/bhageera.jpg",
        movieName: "Bagheera",
        movieContent: "Tamil | A"
      },
      {
        movieImage: "assets/images/home/movies/comingSoon/wakandaForever.jpg",
        movieName: "Black Panther: Wakanda Forever",
        movieContent: "English | U/A"
      }
    ]
    return this.comingSoonMovies;
  }

  getTheatreList() {
    this.theatreDetails = [
      {
        theatreName: "PVR Ampa Skywalk Mall - Aminjikarai",
        theatreContent:["F&B", "4K", "3D","Dolby Atmos" , "Social Seating"]
      },
      {
        theatreName: "Sangam Cinemas 4K RGB Laser Dolby Atmos",
        theatreContent:["F&B", 
                        "Metro Train", "Social Seating", "3D", "4K", "Dolby Atmos", 
                        "RGB Laser", "Sofa"] 
      },
      {
        theatreName: "Deviciniplex",
        theatreContent:["F&B", "Metro Train"] 
      },
      {
        theatreName: "EGA Cinemas",
        theatreContent:["F&B", "Metro Train", "2K", "RGB Laser"] 
      },
      {
        theatreName: "Kamala Cinemas",
        theatreContent:["F&B", "Metro Train", "3D"] 
      },
      {
        theatreName: "Kasi Theatre 4K Dolby Atmos",
        theatreContent:["F&B", "Metro Train", "3D", "4K", "Dolby Atmos"] 
      },
      {
        theatreName: "Udhayam Complex",
        theatreContent:["Metro Train"] 
      },
      {
        theatreName: "Murugan Cinemas 4K Dolby Atmos- Ambattur",
        theatreContent:["4K", "Dolby Atmos"] 
      },
      {
        theatreName: "Rakki Cinemas RGB Laser 4K Dolby Atmos-Ambattur",
        theatreContent:["F&B", "4K", "Dolby Atmos", "RGB Laser"] 
      },
      {
        theatreName: "PVR VR Chennai Anna Nagar",
        theatreContent:["4K", "Dolby Atmos"]
      },
      {
        theatreName: "Ags Cinemas Maduravoyal",
        theatreContent : ["Social Seating", "4K", "Dolby Atmos"]
      }
    ]
    return this.theatreDetails;
  }

}
