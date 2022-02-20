import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any;
  toggleHighestRatingView: boolean;
  highestRatedHeading: any;

  constructor(private service: ListService, private router: Router) {
    this.movies = service.getList();
    this.toggleHighestRatingView = false;
  }

  ngOnInit(): void {}

  //check highest rated button is clicked
  toggleOpen() {
    this.toggleHighestRatingView = !this.toggleHighestRatingView;

    //check first if toggleHighestRating view is false, stop method if so
    if (!this.toggleHighestRatingView) return;

    let name = '';
    let rating = 0;
    let tie = false;

    //loop through current movies array
    for (let i = 0; i < this.movies.length; i++) {
      //check if current rating is higher than previous
      if (this.movies[i].rating > rating) {
        tie = false;
        name = this.movies[i].name;
        rating = this.movies[i].rating;
      }

      //check if current rating is tied with another, then add name
      else if (rating != 0 && this.movies[i].rating == rating) {
        tie = true;
        name = name + ' and ' + this.movies[i].name;
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

  goToMovies() {
    this.router.navigate(['movies']);
  }
}
