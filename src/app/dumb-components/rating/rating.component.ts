import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  ratings: boolean[];
  @Output() outputRating = new EventEmitter();

  constructor() {
    this.ratings = [false, false, false, false, false];
  }

  changeRating(rating: number) {
    for (let i = 0; i < this.ratings.length; i++) {
      //if there is a current rating, set the rating back to 0
      if (this.ratings[i]) {
        this.ratings = [false, false, false, false, false];
        return;

        //if no current rating, update rating
      } else if (i <= rating) {
        this.ratings[i] = !this.ratings[i];
      }
    }
    this.outputRating.emit(rating);
  }
}
