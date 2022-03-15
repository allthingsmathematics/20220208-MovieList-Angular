import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-highest-rating',
  templateUrl: './highest-rating.component.html',
  styleUrls: ['./highest-rating.component.css'],
})
export class HighestRatingComponent implements OnChanges {
  @Input() moviesArray: any[];
  highestRatedHeading: any = 'hello';

  ngOnChanges() {
    let name = '';
    let rating = 0;
    let tie = false;

    //loop through current movies array
    for (let i = 0; i < this.moviesArray.length; i++) {
      //check if current rating is higher than previous
      if (this.moviesArray[i].rating > rating) {
        tie = false;
        name = this.moviesArray[i].name;
        rating = this.moviesArray[i].rating;
      }

      //check if current rating is tied with another, then add name
      else if (rating != 0 && this.moviesArray[i].rating == rating) {
        tie = true;
        name = name + ' and ' + this.moviesArray[i].name;
      }
    }

    //create the View heading depending on results above from loop
    //if no rated movies
    if (rating == 0) this.highestRatedHeading = "You haven't rated any movies";
    else {
      //if single rated movie with no tie
      if (!tie)
        this.highestRatedHeading =
          'The highest rated movie is ' + name + ' with a rating of ' + rating;
      //if rated movies are tied
      else
        this.highestRatedHeading =
          'The highest rate movies are ' + name + ' with a rating of ' + rating;
    }
  }
}
