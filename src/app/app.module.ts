import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './smart-components/movies/movies.component';
import { HomeComponent } from './smart-components/home/home.component';
import { ListService } from './services/list.service';
import { DescriptionComponent } from './smart-components/description/description.component';
import { AddComponent } from './dumb-components/add/add.component';
import { RatingComponent } from './dumb-components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    DescriptionComponent,
    AddComponent,
    RatingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
