import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any;

  constructor(service: ListService, private router: Router) {
    this.movies = service.getList();
  }

  ngOnInit(): void {}

  goToDescription(index: number) {
    this.router.navigate(['description', index]);
  }
}
