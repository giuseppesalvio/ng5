import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AbbComponent } from './abb/abb.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'abb/:id',
    component:AbbComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
