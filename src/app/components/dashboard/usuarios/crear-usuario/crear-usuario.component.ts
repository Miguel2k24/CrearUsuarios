import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/interface/usuarios';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: PersonasService, private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      sexo: ['',Validators.required]
    });
   }

    agregarUsuario(){
      const user: Usuarios = {

        usuario: this.form.value.usuario,
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        sexo: this.form.value.sexo

      }

      this._usuarioService.agregarUsuario(user);

      this._snackBar.open(`Se agrego el Usuario ${user.usuario}`, 'Cerrar', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      
      this.router.navigate(['/dashboard/usuarios']);


   }

  foods: any[] = [
    {value: 'Femenino', viewValue: 'Femenino'},
    {value: 'Masculino', viewValue: 'Masculino'}
  ];



}
