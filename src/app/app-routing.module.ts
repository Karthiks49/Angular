import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{path: 'home', component: HomeComponent},{path: '', component: HomeComponent}, 
{path: 'movies', loadChildren: () => import('./components/movies/movies.module').then(m => m.MoviesModule)},
{path: 'theatres', loadChildren: () => import("./components/theatres/theatres.module").then(m => m.TheatresModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
