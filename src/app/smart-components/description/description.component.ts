import { Component, OnInit, Input } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { RatingComponent } from 'src/app/dumb-components/rating/rating.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  rating: number;
  movies: any;
  index: any;
  id: number;

  constructor(service: ListService, private route: ActivatedRoute) {
    this.movies = service.getList();
    this.index = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(this.index);
    this.rating = this.movies[this.id].rating;
  }

  addRating(rating: any) {
    this.movies[this.id].rating = rating;
  }
}
