import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesFormComponent } from './movies-form/movies-form.component';
import { MoviesListaComponent } from './movies-lista/movies-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [

{path: 'movies', component: LayoutComponent, 
canActivate: [AuthGuard], children: [
{ path: 'form', component: MoviesFormComponent},
{ path: 'form/:id', component: MoviesFormComponent },
{ path: 'lista/:id', component: MoviesListaComponent },
{ path: 'lista', component: MoviesListaComponent },
{ path: '', redirectTo : '/movies/lista', pathMatch: 'full' }
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
