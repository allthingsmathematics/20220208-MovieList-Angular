import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { ListService } from './list.service';
import { DescriptionComponent } from './components/description/description.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent, HomeComponent, DescriptionComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
