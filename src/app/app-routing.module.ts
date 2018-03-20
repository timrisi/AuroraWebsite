import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SquadronComponent } from './squadron/squadron.component'
import {ShipListComponent } from './ship-list/ship-list.component'

const routes: Routes = [
  { path: 'rebel', component: SquadronComponent },
  { path: 'imperial', component: SquadronComponent },
  { path: '', redirectTo: '/rebel', pathMatch: 'full' },
  { path: 'scum', component: SquadronComponent },
  { path: 'ship-list', component: ShipListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
