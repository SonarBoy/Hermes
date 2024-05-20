import { Component, OnInit } from '@angular/core';
import { Table } from '../Table';
import { TableSection } from '../table-list';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tables = TableSection;

  selectedTable? : Table;

  constructor() { }

  ngOnInit() {
  }

  onSelect(tbl: Table): void{
    this.selectedTable = tbl;
    console.log(this.selectedTable);
  }

}
