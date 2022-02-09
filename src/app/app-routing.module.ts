import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './components/description/description.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'description/:id', component: DescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
