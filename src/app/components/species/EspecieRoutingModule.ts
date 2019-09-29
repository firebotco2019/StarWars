import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeciesComponent } from '../species/species.component';
import { SearchComponent } from '../species/search/search.component';
import { DetailComponent } from '../species/detail/detail.component';
import { ListComponent } from '../species/list/list.component';

const routes: Routes = [
   {
     path: '',
     component: SpeciesComponent
   } 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EspecieRoutingModule { }