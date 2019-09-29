import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesComponent } from '../species/species.component';
import { SearchComponent } from '../species/search/search.component';
import { DetailComponent } from '../species/detail/detail.component';
import { ListComponent } from '../species/list/list.component';
import { EspecieRoutingModule } from './EspecieRoutingModule';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SpeciesComponent,
    SearchComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    EspecieRoutingModule,
    ReactiveFormsModule
  ], exports: [
    SpeciesComponent,
    SearchComponent,
    DetailComponent,
    ListComponent
  ]
})
export class EspeciesModule { }
