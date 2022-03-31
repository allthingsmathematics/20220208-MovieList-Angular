import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResolveGuard } from './guards/resolve.guard';
import { DescriptionComponent } from './smart-components/description/description.component';
import { HomeComponent } from './smart-components/home/home.component';
import { MoviesComponent } from './smart-components/movies/movies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  {
    path: 'movies/:id',
    component: DescriptionComponent,
    resolve: { movieList: ResolveGuard },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
