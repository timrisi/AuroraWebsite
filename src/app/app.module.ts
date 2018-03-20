import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SquadronComponent } from './squadron/squadron.component';
import { AppRoutingModule } from './/app-routing.module';
import { ShipListComponent } from './ship-list/ship-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SquadronComponent,
    ShipListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
