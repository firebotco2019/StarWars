import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartshipsComponent } from './startships.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StartshipsComponent
  }
];

@NgModule({
  declarations: [StartshipsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class StartshipsModule { }
