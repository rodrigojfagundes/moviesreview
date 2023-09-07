import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie'

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.css']
})
export class MoviesFormComponent implements OnInit {


movie: Movie;
title: string = 'batman';

  constructor() { 
  this.movie = new Movie();
  this.movie.title = 'koringa';

  }

  ngOnInit(): void {
  }

clicar(){
    console.log('Cliquei');
}

}
