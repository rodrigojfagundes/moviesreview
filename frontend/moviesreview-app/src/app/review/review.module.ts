import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewRoutingModule } from './review-routing.module';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewListaComponent } from './review-lista/review-lista.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        ReviewFormComponent,
        ReviewListaComponent
    ],
    imports: [
        CommonModule,
        ReviewRoutingModule,
        FormsModule,
        RouterModule
    ], exports: [
        ReviewFormComponent,
        ReviewListaComponent
    ]
})
export class ReviewModule { }