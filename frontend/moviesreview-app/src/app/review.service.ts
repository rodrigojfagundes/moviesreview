import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Review } from "./review/review";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ReviewBusca } from './review/review-list/reviewBusca';
import { ResponsePageable } from "./movies/responsePageable.model";

@Injectable({
    providedIn: 'root'
})
export class ReviewService {

    apiURL: string = environment.apiUrlBase + "/reviews";

    constructor(private http: HttpClient) { }


    insert(review: Review): Observable<Review> {
        return this.http.post<Review>(this.apiURL, review);
    }

    getReviews(): Observable<Review[]> {

        const httpParams = new HttpParams();

        const url = this.apiURL;
        //    console.log(url);
        return this.http.get<Review[]>('http://localhost:8080/reviews');
    }

}