import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: any;
  toggleHighestRatingView: boolean;
  highestRatedHeading: any;

  constructor(private service: ListService, private router: Router) {
    this.movies = service.getList();
    this.toggleHighestRatingView = false;
  }

  goToMovies() {
    this.router.navigate(['movies']);
  }
}
