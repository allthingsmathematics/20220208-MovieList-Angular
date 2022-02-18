import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  @Output() newMovie = new EventEmitter();

  constructor() {}

  addMovie(
    newName: string,
    newYear: string,
    newDescription: string,
    newImage: string
  ) {
    // console.log(newImage);
    this.newMovie.emit({ newName, newYear, newDescription, newImage });
  }
}
