import { StartshipsModule } from './components/startships/startships.module';
import { PeopleModule } from './components/people/people.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'especies',
    loadChildren:   './components/species/especies.module#EspeciesModule'
  },
  {
    path: 'personas',
    loadChildren:   './components/people/people.module#PeopleModule'
  },
  {
    path: 'peliculas',
    loadChildren:   './components/films/films.module#FilmsModule'
  },
  {
    path: 'planetas',
    loadChildren:   './components/planets/planets.module#PlanetsModule'
  },
  {
    path: 'automoviles',
    loadChildren:   './components/vehicles/vehicles.module#VehiclesModule'
  },
  {
    path: 'naves',
    loadChildren:   './components/startships/startships.module#StartshipsModule'
  },
  {
    path: 'inicio',
    loadChildren:   './components/home/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
