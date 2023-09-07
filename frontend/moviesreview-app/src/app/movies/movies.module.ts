import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesFormComponent } from './movies-form/movies-form.component';
import { MoviesListaComponent } from './movies-lista/movies-lista.component';

@NgModule({
  declarations: [MoviesFormComponent, MoviesListaComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule
  ], exports: [
  MoviesFormComponent,
  MoviesListaComponent
  ]
})
export class MoviesModule { }
