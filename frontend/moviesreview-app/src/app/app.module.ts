import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { MoviesModule } from './movies/movies.module';
import { MoviesService } from './movies.service';
import { ReviewModule } from './review/review.module';
import { ReviewService } from './review.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    MoviesModule,
    ReviewModule
  ],
  providers: [
  MoviesService,
  ReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
