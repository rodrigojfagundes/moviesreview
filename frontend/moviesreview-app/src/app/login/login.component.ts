import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./user";
import { AuthService } from "../auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Role } from "../role/role";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    name: string;
    username: string;
    password: string;
    signingUp: boolean;
    successMessage: string;
    errors: String[];
    roles: Role[];

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }


    onSubmit() {
        this.authService
            .tryLogin(this.username, this.password)
            .subscribe(response => {
                const access_token = JSON.stringify(response);
                localStorage.setItem('access_token', access_token)
                this.router.navigate(['/home'])
            }, HttpErrorResponse => {
                this.errors = ['User e/ou senha incorreto(s).']
            })
    }

    prepareRegister(event) {
        event.preventDefault();
        this.signingUp = true;
    }

    cancelRegister() {
        this.signingUp = false;
    }

    register() {
        const user: User = new User();
        user.name = this.name;
        user.username = this.username;
        user.password = this.password;
        user.roles = [{ id: 2 }];

        this.authService
            .insert(user)
            .subscribe(response => {
                this.successMessage = "Cadastro realizado com sucesso! Efetue o login.";
                this.signingUp = false;
                this.name = '';
                this.username = '';
                this.password = '';
                this.roles = [];
                this.errors = [];
            }, errorResponse => {
                this.successMessage = null;
                this.errors = errorResponse.error.errors;
            })

    }


}