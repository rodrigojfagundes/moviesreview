import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "./movies/movie";
import { environment } from "src/environments/environment";
import { JwtConfig, JwtHelperService } from '@auth0/angular-jwt'
import { User } from "./login/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    apiURL: string = environment.apiUrlBase + "/users"

    tokenURL: string = environment.apiUrlBase + environment.getTokenUrl;
    clientID: string = environment.clientId;
    clientSecret: string = environment.clientSecret;
    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(
        private http: HttpClient
    ) { }

    getToken() {
        const tokenString = localStorage.getItem('access_token')
        if (tokenString) {
            const token = JSON.parse(tokenString).access_token
            return token;
        }
        return null;
    }

    closeSession() {
        localStorage.removeItem('access_token')
    }

    getUserAutenticado() {
        const token = this.getToken();

        if (token) {
            const user = this.jwtHelper.decodeToken(token).user_name
            return user
        }
        return null;
    }

    isAuthenticated(): boolean {
        const token = this.getToken();
        if (token) {
            const expired = this.jwtHelper.isTokenExpired(token);
            return !expired;
        }
        return false;
    }

    insert(user: User): Observable<any> {
        return this.http.post<any>(this.apiURL, user);
    }

    tryLogin(username: string, password: string): Observable<any> {

        const params = new HttpParams()
            .set('username', username)
            .set('password', password)
            .set('grant_type', 'password')

        const headers = {
            'Authorization': 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
            'Content-Type': 'application/x-www-form-urlencoded'
        }


        return this.http.post(this.tokenURL, params.toString(), { headers });
    }
}