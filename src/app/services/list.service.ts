import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  list = [
    {
      name: 'Legends of the Fall',
      year: '1994',
      url: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Legendsoffallposter.jpg',
      description:
        'In the early 1900s, three brothers and their father living in the remote wilderness of Montana are affected by betrayal, history, love, nature, and war.',
      rating: 0,
    },
    {
      name: 'Gladiator',
      year: '2001',
      url: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png',
      description:
        'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
      rating: 0,
    },
    {
      name: 'Braveheart',
      year: '1995',
      url: 'https://upload.wikimedia.org/wikipedia/en/5/55/Braveheart_imp.jpg',
      description:
        'Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.',
      rating: 0,
    },
  ];

  private list$ = new BehaviorSubject<any[]>(this.list);

  getList() {
    return [...this.list];
  }

  getListStream() {
    return this.list$.asObservable();
  }

  updateRating(movieName: string, rating: number) {
    this.list = this.list.map((movie) => {
      return movie.name === movieName ? { ...movie, rating } : movie;
    });
  }

  addMovie(
    newName: string,
    newYear: string,
    newDescription: string,
    newImage: string
  ) {
    this.list$.next([
      ...this.list$.getValue(),
      {
        name: newName,
        year: newYear,
        description: newDescription,
        url: newImage,
        rating: 0,
      },
    ]);
    // console.log(this.list);
  }
}
