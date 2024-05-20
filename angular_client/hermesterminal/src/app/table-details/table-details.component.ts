import { Component, OnInit, Input } from '@angular/core';
import { Table } from '../Table';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent implements OnInit {


  @Input() table?: Table;
  
  constructor() { }

  ngOnInit() {
  }

}
