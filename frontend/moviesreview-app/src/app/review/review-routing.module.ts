import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from "../auth.guard";

const routes: Routes = [
    {
        path: 'review', canActivate: [AuthGuard], component: LayoutComponent, children: [
            { path: 'form', component: ReviewFormComponent },
            { path: 'list', component: ReviewListComponent },
            { path: '', redirectTo: '/review/list', pathMatch: 'full' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReviewRoutingModule { }