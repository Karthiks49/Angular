import { movieDetails, comingSoonMovies, theatreDetails, moviesFilterDetails, theatresFilterDetails, movieInfo } from "./movieInterface";

export const movieList: movieDetails[] = [
  {
    movieImage: "assets/images/home/movies/nowShowing/rocky.jpg",
    movieName: "Rocky",
    movieContent: "Tamil | A"
  },
  {
    movieImage: "assets/images/home/movies/nowShowing/shyamSinghaRoy.jpg",
    movieName: "Shyam Singha Roy",
    movieContent: "Tamil | U/A"
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

export const comingSoonMoviesList : comingSoonMovies[] = [
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

export const theatreDetailList : theatreDetails[] = [
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

export const moviesFilterList : moviesFilterDetails[] = [
  {
    heading : "LANGUAGE",
    content : ["TAMIL", "MALAYALAM", "ENGLISH", "TELUGU", "HINDI"]
  },
  {
    heading : "EXPERIENCE",
    content : ["2D", "3D"]
  },
  {
    heading : "GENRE",
    content : ["DRAMA", "FAMILY", "ROMANCE", "MUSICAL", "COMEDY", "ROMANTIC",
               "ACTION", "THRILLER", "SPORTS", "BIOGRAPHY", "HORROR", "MYSTERY",
               "FANTASY", "ADVENTURE", "SCI-FI", "CRIME"]
  }
]

export const theatresFilterList : theatresFilterDetails[] = [
  {
    heading : "AMENITIES",
    content : ["F&B", "Metro Train", "Parking", "Social Seating"]
  },
  {
    heading : "EXPERIENCE",
    content : ["RGB Laser", "Dolby Atmos", "2K", "4K", "Dolby 7.1", "Sofa", "3D"]
  } 
]

export const moviesInformation: movieInfo[] = [
  {
    title: "Rocky",
    poster: "assets/images/home/movies/moviePoster/rocky.jpg",
    language: "Tamil | A",
    genreAndDuration: ["Action Drama", "2 hrs 09 mins"],
    actors: ["BharathiRaaja", "Vasanth Ravi", "Raveena Ravi", "Rohini Moleti", "Ravi Venkatraman"],
    director: "Arun Matheswaran",
    musicDirector: "Darbuka Siva",
    synopsis: "Rocky, a gangster released after 17 years from prison, goes back to his childhood house, searching for his missing sister Amudha all the while reminiscing his violent past as it comes back to haunt him."
  },
  {
    title: "Shyam Singha Roy",
    poster: "assets/images/home/movies/moviePoster/shyam.jpg",
    language: "Tamil | U/A",
    genreAndDuration: ["Drama History", "2 hrs 37 mins"],
    actors: ["Nani", "Krithi Shetty", "Sai pallavi", "Madona Sebastian"],
    director: "Rahul Sankrityan",
    musicDirector: "Radhan",
    synopsis: "Vasu is an aspiring film director in Hyderabad. To impress a film producer, he starts making a short film and finds Keerthi, a psychology graduate to be the lead. After some resistance, Keerthi agrees to act in the film, and the shoot is completed within a few days."
  },
  {
    title: "Spider Man No Way Home",
    poster: "assets/images/home/movies/moviePoster/spiderman.webp",
    language: "Tamil | U/A",
    genreAndDuration: ["Action Adventure Sci-Fi", "2 hrs 29 mins"],
    actors: ["Tom Holland", "Tobey Maguire", "Andrew Garfield", "Zendaya"],
    director: "Jon Watts",
    musicDirector: "Michael Giacchino",
    synopsis: "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
  },
  {
    title: "Maanadu",
    poster: "assets/images/home/movies/moviePoster/maanadu.jpg",
    language: "Tamil | U/A",
    genreAndDuration: ["Adventure Comedy Drama", "2 hrs 27 mins"],
    actors: ["T R Silambarasan", "S J Suriya" ,"Kalyani Priyadarshan"],
    director: "Venkat Prabhu",
    musicDirector: "Yuvan Shankar Raja",
    synopsis: "A tale of money and muscle power and how these two things can get a person to the top political chair."
  },
  {
    title: "Pushpa",
    poster: "assets/images/home/movies/moviePoster/pushpa.jpg",
    language: "Tamil | U/A",
    genreAndDuration: ["Action Thriller", "2 hrs 59 mins"],
    actors: ["Allu Arjun", "Fahadh Faasil", "Rashmika Mandana"],
    director: "Sukumar Bandreddi",
    musicDirector: "Debi Sri Prasad",
    synopsis: "In the 1990s, Pushpa Raj is a coolie who works to smuggle red sanders, a rare wood that only grows in the Seshachalam Hills of the Chittoor district in Andhra Pradesh."
  },
  {
    title: "83",
    poster: "assets/images/home/movies/moviePoster/83.jpg",
    language: "Tamil | U",
    genreAndDuration: ["Sports Biography", "2 hrs 43 mins"],
    actors: ["Ranveer Singh", "Deepika Padukone", "Katrina Kaif", "Jiiva"],
    director: "Kabir Khan",
    musicDirector: "Julius Packiam",
    synopsis: "The movie details the journey of the victory of the Indian cricket team, led by Kapil Dev (Ranveer Singh), in the 1983 World Cup. On 25 June 1983, the Lord's Cricket Ground witnessed 14 men beat the twice over World Champions West Indies, putting India back onto the cricket world stage."
  },
  {
    title: "The King's Man",
    poster: "assets/images/home/movies/moviePoster/kingsMan.jpg",
    language: "Tamil | A",
    genreAndDuration: ["Action Adventure Thriller", "2 hrs 11 mins"],
    actors: ["Ralph Fiennes", "Gemma Arterton", "Harris Dickinson", "Rhys Ifans"],
    director: "Matthew Vaughn",
    musicDirector: "Henry Jackman",
    synopsis: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity."
  },
  {
    title: "Writer",
    poster: "assets/images/home/movies/moviePoster/writer.jpg",
    language: "Tamil | U/A",
    genreAndDuration: ["Drama", "2 hrs 49 mins"],
    actors: ["P Samuthirakani", "Dileepan", "Maheswari", "Hari Krishnan", "Lizze Antony"],
    director: "Franklin Jacob",
    musicDirector: "Govind Vasantha",
    synopsis: "A writer at a police station gets trapped in an illegal custody case involving an innocent PHD student. With his guilt and regret looming large, can he save the young man?"
  }
]

