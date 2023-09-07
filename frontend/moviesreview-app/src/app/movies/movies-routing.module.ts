import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesFormComponent } from './movies-form/movies-form.component';
import { MoviesListaComponent } from './movies-lista/movies-lista.component';

const routes: Routes = [
{ path: 'movies-form', component: MoviesFormComponent},
{ path: 'movies-form/:id', component: MoviesFormComponent },
{ path: 'movies-lista/:id', component: MoviesListaComponent },
{ path: 'movies-lista', component: MoviesListaComponent },
{ path: '', redirectTo : '/movies/lista', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
