import { StartshipsModule } from './components/startships/startships.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EspeciesService } from './services/especies.service';
import { HttpClientModule } from '@angular/common/http';
import { EspeciesModule } from './components/species/especies.module';
import {SharedModule} from './components/shared/shared/shared.module';
import { PeopleModule } from './components/people/people.module';
import { FilmsModule } from './components/films/films.module';
import { PlanetsModule } from './components/planets/planets.module';
import { VehiclesModule } from './components/vehicles/vehicles.module';
import { HomeModule } from './components/home/home.module';
  
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EspeciesModule,
    AngularFontAwesomeModule,
    RouterModule,
    SharedModule,
    PeopleModule,
    FilmsModule,
    StartshipsModule,
    PlanetsModule,
    VehiclesModule,
    HomeModule
  ],
  providers: [EspeciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
