import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/list.service';
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

  constructor(service: ListService, private route: ActivatedRoute) {
    this.movies = service.getList();
    this.index = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(this.index);
  }

  ngOnInit(): void {}
}
