import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MoviesService } from '../../movies.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

    movies: Movie[];
    movieSelected: Movie;
    successMessage: string;
    errorMessage: string;
    url: string = '';
    urlSafe: SafeResourceUrl;


    constructor(
        private service: MoviesService,
        private router: Router,
        public sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        this.getMovies();
    }

    getMovies() {
        this.service.getMovies().subscribe(data => {
            this.movies = data.content;
        })
    }


    newRegister() {
        this.router.navigate(['/movies/form'])
    }

    prepareDeletion(movie: Movie) {
        this.movieSelected = movie;
    }

    deletionMovie() {
        this.service
            .deletion(this.movieSelected)
            .subscribe(response => {
                this.successMessage = 'Movie deletado com sucesso'
                this.ngOnInit();
            },
                erro => this.errorMessage = 'Ocorreu um erro ao deletion movie'
            )
    }
}