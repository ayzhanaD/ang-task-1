import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() columnHeight = "";
  @Input() columnColor = "";
}
