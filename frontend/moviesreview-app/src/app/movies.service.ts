import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movies/movie';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../app/movies/responsePageable.model';
import { environment } from '../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

apiURL: string = environment.apiUrlBase + '/movies';


    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }

    insert(movie: Movie): Observable<Movie> {
        return this.http.post<Movie>(`${this.apiURL}`, movie);
    }


    update(movie: Movie): Observable<any> {
        return this.http.put<Movie>(`${this.apiURL}/${movie.id}`, movie);
    }


    getMovies(): Observable<ResponsePageable> {
        return this.http.get<ResponsePageable>(this.apiURL);
    }



    getMovieById(id: number): Observable<any> {
        return this.http.get<Movie>(`${this.apiURL}/${id}`);
    }


    deletion(movie: Movie): Observable<any> {
        return this.http.delete<any>(`${this.apiURL}/${movie.id}`);
    }


}
