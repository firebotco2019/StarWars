import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ NavComponent],
  imports: [
    CommonModule, RouterModule, HttpClientModule
  ],
  exports: [NavComponent]
})
export class SharedModule { }
