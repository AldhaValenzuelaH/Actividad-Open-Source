import { Component, OnInit } from '@angular/core';
import {MatInput} from "@angular/material/input";
import {PeliculasModel} from "../model/peliculas.model";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {ServiceMovieService} from "../service/service-movie.service";
import {Router} from "@angular/router";

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
export class TableComponentComponent  implements OnInit{
  dataSource = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'name', 'photo', 'duration', 'genre'];
  peliculas : PeliculasModel[]=[];
  peliculasData: PeliculasModel;
  constructor(private movieService: ServiceMovieService, private router: Router)  {
    this.peliculasData = {} as PeliculasModel;
  }
  ngOnInit() {
    this.getPeliculas();
  }
  getPeliculas(){
    this.movieService.getAll().subscribe((data:any) => {
      data.movies.forEach((movie: any) => {
        this.peliculasData = new PeliculasModel(movie.id, movie.nombre, movie.foto, movie.duracion, movie.genero);
        this.peliculas.push(this.peliculasData);
      });
      this.dataSource.data = this.peliculas;
      });
  }

}
