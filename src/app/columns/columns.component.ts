import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  smallHeight = "50px";
  middleHeight = "100px";
  bigHeight = "150px";

  columnColorRed = "red";
  columnColorBlue = "blue";
  columnColorViolet = "violet";
}
