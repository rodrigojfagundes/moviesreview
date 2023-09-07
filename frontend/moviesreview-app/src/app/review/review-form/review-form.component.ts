import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/movies/movie";
import { MoviesService } from "src/app/movies.service";
import { Review } from "../review";
import { ReviewService } from "src/app/review.service";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
selector: 'app-review-form',
templateUrl: './review-form.component.html',
styleUrls: ['./review-form.component.css']
})

export class ReviewFormComponent implements OnInit {

//movies: Movie[] = [];
movies: Movie[];
review: Review;
success: boolean = false;
errors: String[];
url: string = '';
urlSafe: SafeResourceUrl;

constructor(
private movieService: MoviesService,
private reviewService: ReviewService,
public sanitizer: DomSanitizer
) {
this.review = new Review();
}

ngOnInit(): void {
    this.movieService
    .getMovies()
    .subscribe(data => {
    this.movies = data.content;

})
}

onSubmit() {
this.reviewService
.salvar(this.review)
.subscribe(response => { 
this.success = true;
this.errors = null;
this.review = new Review();
}, errorResponse => {
this.success = false;
this.errors = errorResponse.error.errors;
})
}
}

