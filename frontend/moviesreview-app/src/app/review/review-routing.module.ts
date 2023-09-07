import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewListaComponent } from './review-lista/review-lista.component';


const routes: Routes = [
{ path: 'review-form', component: ReviewFormComponent },
{ path: 'review-listagem', component: ReviewListaComponent }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ReviewRoutingModule {}