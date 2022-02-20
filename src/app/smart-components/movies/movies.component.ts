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
  toggleAdd: boolean;

  constructor(private service: ListService, private router: Router) {
    this.movies = service.getList();
    this.toggleAdd = false;
    console.log(this.movies);
  }

  goToDescription(index: number) {
    this.router.navigate(['movies', index]);
  }

  toggleAddMovie() {
    this.toggleAdd = !this.toggleAdd;
  }

  inputNewMovie({ newName, newYear, newDescription, newImage }: any) {
    //if movie exists, return and stop method
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].name == newName) {
        alert('This movie already exists!!!');
        return;
      }
    }

    //only add movie if its new
    this.service.addMovie(newName, newYear, newDescription, newImage);
    this.movies = this.service.getList();
    console.log('ran');
  }
}
