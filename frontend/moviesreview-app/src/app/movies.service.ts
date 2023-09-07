//classe de SERVICOS de MOVIE... Ela basicamente pega as solicitacoes
//e envia para o BACKEND (JAVA+SPRING)


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movies/movie';
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})
export class MoviesService {

    constructor(private http: HttpClient) {}

    salvar( movie: Movie ) : Observable<Movie>{
        return this.http.post<Movie>('http://localhost:8080/movies', movie);
    }


    atualizar(movie: Movie) : Observable<any> {
        return this.http.put<Movie>(`http://localhost:8080/movies/${movie.id}`, movie);
    }


    getMovie() : Observable<Movie[]> {
        return this.http.get<Movie[]>('http://localhost:8080/movies');
    }

    getMovieById(id : number) : Observable<Movie> {
    return this.http.get<any> (`http://localhost:8080/movies/${id}`);
}


    deletar(movie : Movie) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/movies/${movie.id}`);
    }


}
