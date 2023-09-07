import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "./usuario";
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
cadastrando: boolean;
mensagemSucesso: string;
errors: String[];
roles: Role[];

constructor (
private router: Router,
private authService: AuthService
) {}


onSubmit(){
this.authService
    .tentarLogar( this.username, this.password)
    .subscribe(response => {
    const access_token = JSON.stringify(response);
    localStorage.setItem('access_token', access_token)
    this.router.navigate(['/home'])
    }, HttpErrorResponse => {
    this.errors = ['Usuario e/ou senha incorreto(s).']
    })
}

preparaCadastrar(event) {
event.preventDefault();
this.cadastrando = true;
}

cancelaCadastro(){
this.cadastrando = false;
}

cadastrar(){
const usuario: Usuario = new Usuario();
usuario.name = this.name;
usuario.username = this.username;
usuario.password = this.password;
usuario.roles = [{id: 2}];

this.authService
.salvar(usuario)
.subscribe(response => {
this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
this.cadastrando = false;
this.name = '';
this.username = '';
this.password = '';
this.roles = [];
this.errors = [];
}, errorResponse => {
this.mensagemSucesso = null;
this.errors = errorResponse.error.errors;
})

}


}