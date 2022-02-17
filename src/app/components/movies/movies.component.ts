import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Router } from '@angular/router';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any;

  // @Output() descriptionInitialized = new EventEmitter();

  constructor(private service: ListService, private router: Router) {
    this.movies = service.getList();
    console.log(this.movies);
  }

  ngOnInit(): void {}

  goToDescription(index: number) {
    this.router.navigate(['movies', index]);
    // this.descriptionInitialized.emit(this.movies);
  }

  addMovie(
    newName: string,
    newYear: string,
    newDescription: string,
    newImage: string
  ) {
    this.service.addMovie(newName, newYear, newDescription, newImage);
    this.movies = this.service.getList();
    console.log(this.movies);
  }
}
