import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges,
} from '@angular/core';
import { ratingToArray } from './rating-to-array';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnChanges {
  @Input() rating: number;
  ratings: boolean[];
  @Output() outputRating = new EventEmitter();

  ngOnChanges(): void {
    this.ratings = ratingToArray(this.rating);
  }

  changeRating(rating: number) {
    // this.ratings = ratingToArray(rating);
    this.outputRating.emit(rating);
  }
}
