import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { Movie } from '../movie'
import { MoviesService } from '../../movies.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.css']
})
export class MoviesFormComponent implements OnInit {

movie: Movie;
success: boolean = false;
errors: String[];
id: number;

  constructor(
  private service: MoviesService,
  private router: Router,
  private activatedRoute: ActivatedRoute
  ) { 
  this.movie = new Movie();
  }

  ngOnInit(): void {
  let params : Observable<Params> = this.activatedRoute.params
  params.subscribe(urlParams => {
  this.id = urlParams['id'];
  if(this.id) {
  this.service.getMovieById(this.id)
  .subscribe(response => this.movie = response, 
  errorRespose => this.movie = new Movie()
  )
  }
  })
  }

voltarParaListagem() {
this.router.navigate(['/movies/lista'])
}

onSubmit(){
if (this.id){
this.service
.atualizar(this.movie)
.subscribe(response => {
this.success = true;
this.errors = null;
},

errorResponse => {this.errors = ['Erro ao atualizar o movie']
})

} else {
this.service.salvar(this.movie)
.subscribe(response => {
this.success = true;
this.errors = null;
this.movie = response;
}, errorResponse => {
this.success = false;
this.errors = errorResponse.error.errors;
})
}
}
}
