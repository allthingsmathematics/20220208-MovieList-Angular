import { Component, EventEmitter, Output, Input } from '@angular/core';
import { checkMovieExists } from './check-movie-exists';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  @Output() newMovie = new EventEmitter();
  @Input() moviesArray: any[];
  movieName: string;
  movieExists: boolean = false;

  addMovie(
    newName: string,
    newYear: string,
    newDescription: string,
    newImage: string
  ) {
    this.newMovie.emit({ newName, newYear, newDescription, newImage });
  }

  onKeyUp() {
    this.movieExists = checkMovieExists(this.movieName, this.moviesArray);
  }
}
