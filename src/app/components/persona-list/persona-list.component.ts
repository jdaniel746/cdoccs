import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';

import { Persona } from '../../models/persona.model';
import { PersonaList } from '../../models/persona-list.model';
@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent  {
  
  displayedColumns = ['position', 'firstName', 'lastName', 'email'];
  dataSource ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private persona: Persona,private personaList: PersonaList) { 
    this.dataSource = new MatTableDataSource(this.personaList.personas);
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter (filterValue: string ) { 
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue; 
  }
}
// export interface Element {
//   cedula: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   email2: string;
// }

// const ELEMENT_DATA: Persona[] = [
//   {id: 1, cedula: '173434', nombres: 'John', apellidos: 'Doe', correo: 'john@gmail.com', fechaNac: new Date(), tlfLocal: '', tlfPersonal: '', direccion: '', estado: '', municipio: '', parroquia: '', observacion: ''},
//   {id: 1,cedula: '154545', nombres: 'Mike', apellidos: 'Hussey', correo: 'mike@gmail.com', fechaNac: new Date(), tlfLocal: '', tlfPersonal: '', direccion: '', estado: '', municipio: '', parroquia: '', observacion: ''},
//   {id: 1,cedula: '167676', nombres: 'Ricky', apellidos: 'Hans', correo: 'ricky@gmail.com', fechaNac: new Date(), tlfLocal: '', tlfPersonal: '', direccion: '', estado: '', municipio: '', parroquia: '', observacion: ''},
//   {id: 1,cedula: '188765', nombres: 'Martin', apellidos: 'Kos', correo: 'martin@gmail.com', fechaNac: new Date(), tlfLocal: '', tlfPersonal: '', direccion: '', estado: '', municipio: '', parroquia: '', observacion: ''},
//   {id: 1,cedula: '164455', nombres: 'Tom', apellidos: 'Paisa', correo: 'tom@gmail.com', fechaNac: new Date(), tlfLocal: '', tlfPersonal: '', direccion: '', estado: '', municipio: '', parroquia: '', observacion: ''}
// ];

