import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  ratings: boolean[];
  @Output() outputRating = new EventEmitter();

  constructor() {
    this.ratings = [false, false, false, false, false];
  }

  ngOnInit(): void {
    this.changeRating(this.rating - 1);
  }

  changeRating(rating: number) {
    for (let i = 0; i < this.ratings.length; i++) {
      //if there is a current rating, set the rating back to 0, break loop
      if (this.ratings[i]) {
        this.ratings = [false, false, false, false, false];
        this.rating = 0;
        break;

        //if no current rating, update rating
      } else if (i <= rating) {
        this.ratings[i] = !this.ratings[i];
        this.rating = rating + 1;
      }
    }
    this.outputRating.emit(this.rating);
  }
}
