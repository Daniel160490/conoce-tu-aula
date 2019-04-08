import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuariosPage: 'usuariosPage';
  idSelected: any;
  nuevoAlumno = {
    nombre: null,
    apellidoUno: null,
    apellidoDos: null,
    clase: null,
    usuario: null,
    password: null
  }
  constructor( public alumService: AlumnosService, public alertController: AlertController, public navCtrl: NavController, public formBuilder: FormBuilder) { 
    console.log('UsuariosPage');
  }

  ngOnInit() {
  }

  // Metodo para guardar un alumno nuevo
  saveAlumn(){
    this.alumService.addItems(this.nuevoAlumno);
    console.log(this.nuevoAlumno);
    if (this.nuevoAlumno) {
      this.presentAlert();
    }
    this.navCtrl.navigateForward('alumnos');
    
  }

  deleteAlumn(alum) {
    this.alumService.removeAlumn(alum.id);
  }

  // Mensaje de alerta para usuario añadido correctamente.
  async presentAlert(){
    const alert = await this.alertController.create({
      header: '¡Añadido!',
      message: 'Alumno añadido correctamente al aula',
      buttons: ['ACEPTAR']
    });

    await alert.present();
  }



  // Tutorial para el formulario

  // https://blog.ng-classroom.com/blog/ionic2/forms-with-ionic/

}
