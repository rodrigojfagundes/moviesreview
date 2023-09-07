import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesFormComponent } from './movies-form/movies-form.component';


@NgModule({
  declarations: [MoviesFormComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule
  ], exports: [
  MoviesFormComponent
  ]
})
export class MoviesModule { }
