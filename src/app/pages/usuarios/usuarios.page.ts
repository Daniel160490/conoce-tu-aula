import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuariosPAge: 'usuariosPage';

  constructor(public alertController: AlertController, public navCtrl: NavController, public formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  // Metodo para guardar un alumno nuevo
  saveAlumn(){

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
