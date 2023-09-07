import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movies/movie';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../app/movies/responsePageable.model';

@Injectable ({
    providedIn: 'root'
})
export class MoviesService {

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    constructor(private http: HttpClient) {}

    salvar( movie: Movie ) : Observable<Movie>{
        return this.http.post<Movie>('http://localhost:8080/movies', movie);
    }


    atualizar(movie: Movie) : Observable<any> {
        return this.http.put<Movie>(`http://localhost:8080/movies/${movie.id}`, movie);
    }


    getMovies() : Observable<ResponsePageable> {
        return this.http.get<ResponsePageable>('http://localhost:8080/movies');
    }



    getMovieById(id : number) : Observable<any> {
    return this.http.get<Movie> (`http://localhost:8080/movies/${id}`);
}


    deletar(movie : Movie) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/movies/${movie.id}`);
    }


}
