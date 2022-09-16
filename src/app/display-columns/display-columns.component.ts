import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-columns',
  templateUrl: './display-columns.component.html',
  styleUrls: ['./display-columns.component.css']
})
export class DisplayColumnsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cars = [
    {carName: 'Toyota RAV4', colorTxt: 'red'},
    {carName: 'Toyota LandCruiser', colorTxt: 'blue'},
    {carName: 'Toyota Camry', colorTxt: 'violet'}
  ]
}
