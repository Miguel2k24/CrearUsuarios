import { Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'src/app/interface/usuarios';
import { PersonasService } from 'src/app/services/personas.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent {


  //Declaracion de mi servicio
  listaDePersonas: Usuarios[] = [];

  //injecion del servicio de usuarios
  constructor(private _usuarioService: PersonasService, private _snackBar: MatSnackBar) { }


  //inicializamos el servicio
  ngOnInit() {
    this.cargarUsuarios();
  }


  //Cargamos el servicio con el metodo que creamos
  cargarUsuarios() {
    this.listaDePersonas = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listaDePersonas);
  }


  // Las columnas para poder vindiarlas en el html
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'accion'];
  dataSource!: MatTableDataSource<any>;

  //Filtrado
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue
  }


  //paginacion
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //Ordenar al estilo alfabeto
  @ViewChild(MatSort) sort!: MatSort;


  //Siglo de vida de mis componentes
  ngAfterViewInit() {
    //paginacion
    this.dataSource.paginator = this.paginator;
    //Ordenar al estilo alfabeto
    this.dataSource.sort = this.sort;
  }

  eliminarUsuario(index: number): void {
    console.log(index);
    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();

    
    this._snackBar.open(`El usuario ${this.listaDePersonas[index].usuario} Fue eliminado con exito`, 'Cerrar', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

}
