import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MoviesService } from '../../movies.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
 selector: 'app-movies-lista',
 templateUrl: './movies-lista.component.html',
 styleUrls: ['./movies-lista.component.css']
})
export class MoviesListaComponent implements OnInit {

movies: Movie[];
movieSelecionado: Movie;
mensagemSucesso: string;
mensagemErro: string;
url: string = '';
urlSafe: SafeResourceUrl;


constructor (
private service: MoviesService,
private router: Router,
public sanitizer: DomSanitizer
){}

ngOnInit(): void {
    this.getMovies();
}

getMovies(){
this.service.getMovies().subscribe(data => {
this.movies = data.content;
})
}


novoCadastro (){
this.router.navigate(['/movies/form'])
}

preparaDelecao(movie: Movie) {
this.movieSelecionado = movie;
}

deletarMovie(){
this.service
.deletar(this.movieSelecionado)
.subscribe(response => {this.mensagemSucesso = 'Movie deletado com sucesso'
this.ngOnInit();
},
erro => this.mensagemErro = 'Ocorreu um erro ao deletar movie'
)
}
}