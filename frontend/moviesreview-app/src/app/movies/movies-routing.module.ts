import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesFormComponent } from './movies-form/movies-form.component'

const routes: Routes = [
{ path: 'movies-form', component: MoviesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
