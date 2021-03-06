import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Router } from '@angular/router';
import { DescriptionComponent } from '../description/description.component';
import { AddComponent } from 'src/app/dumb-components/add/add.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies: any;

  constructor(private service: ListService, private router: Router) {
    this.movies = service.getList();
  }

  goToDescription(index: number) {
    this.router.navigate(['movies', index]);
  }

  inputNewMovie({ newName, newYear, newDescription, newImage }: any) {
    //if movie exists, return and stop method

    this.service.addMovie(newName, newYear, newDescription, newImage);
    this.movies = this.service.getList();
  }
}
