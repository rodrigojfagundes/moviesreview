import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie'

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.css']
})
export class MoviesFormComponent implements OnInit {


movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
