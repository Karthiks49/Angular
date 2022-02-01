import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieBookingComponent } from '../movie-booking/movie-booking.component';

const routes: Routes = [{path: '', component: MoviesComponent}, 
{path: 'movieBooking/:movieName', component: MovieBookingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
