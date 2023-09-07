import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewListaComponent } from './review-lista/review-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from "../auth.guard";

const routes: Routes = [
{ path: 'review', canActivate: [AuthGuard], component: LayoutComponent, children:[
{ path: 'form', component: ReviewFormComponent },
{ path: 'lista', component: ReviewListaComponent },
{ path: '', redirectTo: '/review/lista', pathMatch: 'full' }
]},
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ReviewRoutingModule {}