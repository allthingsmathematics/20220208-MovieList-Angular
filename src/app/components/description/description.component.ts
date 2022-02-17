import { Component, OnInit, Input } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  movies: any;
  index: any;
  id: number;
  ratings: boolean[];

  constructor(service: ListService, private route: ActivatedRoute) {
    //right now I am getting the movies array from the static List service. I need to figure
    //out how to get the array from the movies component after it gets updated with new movies
    this.movies = service.getList();

    this.ratings = [false, false, false, false, false];
    this.index = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(this.index);
  }

  ngOnInit(): void {}

  changeRating(rating: number) {
    for (let i = 0; i < this.ratings.length; i++) {
      //if there is a current rating, set the rating back to 0
      if (this.ratings[i]) {
        this.ratings = [false, false, false, false, false];
        return;

        //if no current rating, update rating
      } else if (i <= rating) this.ratings[i] = !this.ratings[i];
    }
  }
}
