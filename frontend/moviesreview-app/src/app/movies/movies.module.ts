import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesFormComponent } from './movies-form/movies-form.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

@NgModule({
    declarations: [MoviesFormComponent, MoviesListComponent],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        FormsModule
    ], exports: [
        MoviesFormComponent,
        MoviesListComponent
    ]
})
export class MoviesModule { }
