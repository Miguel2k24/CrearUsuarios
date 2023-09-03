import { Injectable } from '@angular/core';
import { Usuarios } from '../interface/usuarios';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  //Creamos nuestro servicios de personas y usuarios
  PERSONAS: Usuarios[] = [
    { usuario: 'Miguel2k', nombre: 'Miguel', apellido: 'Bonilla', sexo: 'Masculino' },
    { usuario: 'jeisis', nombre: 'Paloma', apellido: 'Salcedo', sexo: 'Femenina' },
    { usuario: 'ashley123', nombre: 'Ashley', apellido: 'Franco', sexo: 'Femenina' },
    { usuario: 'Miguel2k', nombre: 'Miguel', apellido: 'Bonilla', sexo: 'Masculino' },
    { usuario: 'jeisis', nombre: 'Paloma', apellido: 'Salcedo', sexo: 'Femenina' },
    { usuario: 'ashley123', nombre: 'Ashley', apellido: 'Franco', sexo: 'Femenina' },
    { usuario: 'john09', nombre: 'John', apellido: 'Rodriguez', sexo: 'Masculino' },
    { usuario: 'roberto723', nombre: 'Roberto', apellido: 'person', sexo: 'Masculino' },
    { usuario: 'luis1k23', nombre: 'Luis', apellido: 'Green', sexo: 'Masculino' },
    { usuario: 'Marispae4', nombre: 'Maris', apellido: 'Paez', sexo: 'Femenina' },
    { usuario: 'ljjsj', nombre: 'Karla', apellido: 'Prado', sexo: 'Femenina' },
    { usuario: 'tvlega', nombre: 'Alberto', apellido: 'Garcia', sexo: 'Masculino' },
    { usuario: 'juana_123', nombre: 'Juana', apellido: 'Mendez', sexo: 'Femenina' },
    { usuario: '098sDa', nombre: 'Brayan', apellido: 'Franco', sexo: 'Masculino' },
    { usuario: '2k24', nombre: 'Fernanda', apellido: 'Ortiz', sexo: 'Femenina' },
  ];

  constructor() { }
// metodo get para poder usar el servicio de las personas en el TS de usuarios.components
  getUsuario(){
    return this.PERSONAS.slice();
  }


  eliminarUsuario(index: number){
    this.PERSONAS.splice(index, 1);
  }

  agregarUsuario(usuario: Usuarios){
    this.PERSONAS.unshift(usuario);
  }

} 
