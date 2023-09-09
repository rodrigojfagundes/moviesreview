import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewRoutingModule } from './review-routing.module';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        ReviewFormComponent,
        ReviewListComponent
    ],
    imports: [
        CommonModule,
        ReviewRoutingModule,
        FormsModule,
        RouterModule
    ], exports: [
        ReviewFormComponent,
        ReviewListComponent
    ]
})
export class ReviewModule { }