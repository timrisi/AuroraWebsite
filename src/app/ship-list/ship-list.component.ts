import { Component, OnInit } from '@angular/core';
import { Ship } from '../models/ship'
import { ships } from 'xwing-data-module'

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
  // ships: Ship[];
  selectedShip: Ship;

  constructor() { }

  ngOnInit() {
    // this.ships = ships;
    this.selectedShip = ships[32];
    // console.log("Ships: ");
    // console.log(this.ships);
    console.log("Ship name: " + this.selectedShip.name);
  }
}
