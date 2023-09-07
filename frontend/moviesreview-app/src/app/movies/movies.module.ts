import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesFormComponent } from './movies-form/movies-form.component';


@NgModule({
  declarations: [MoviesFormComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ], exports: [
  MoviesFormComponent
  ]
})
export class MoviesModule { }
