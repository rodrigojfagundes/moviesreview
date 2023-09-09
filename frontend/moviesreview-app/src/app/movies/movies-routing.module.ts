import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesFormComponent } from './movies-form/movies-form.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [

    {
        path: 'movies', component: LayoutComponent,
        canActivate: [AuthGuard], children: [
            { path: 'form', component: MoviesFormComponent },
            { path: 'form/:id', component: MoviesFormComponent },
            { path: 'list/:id', component: MoviesListComponent },
            { path: 'list', component: MoviesListComponent },
            { path: '', redirectTo: '/movies/list', pathMatch: 'full' }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule { }
