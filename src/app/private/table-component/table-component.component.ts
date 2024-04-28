import { Component, OnInit, ViewChild } from '@angular/core';
import {MatInput} from "@angular/material/input";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef, MatInput
  ],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {
  displayedColumns = [
    'id', 'name', 'photo', 'duration', 'genre'
  ];
  data: any[] =[];
  dataSource = new MatTableDataSource<any>(this.data);

  ngOnInit(): void {
    this.getpeliculas();
  }

  getpeliculas() {
    let movieData;

  }
}
