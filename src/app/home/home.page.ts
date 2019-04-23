import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  home = 'home';
  titulo = 'Conoce tu aula';
  
  constructor(public navCtrl: NavController, public alertCtrl : AlertController){
    console.log('HomePage');
  }

  // Acceso directo al calendario de la aplicación
  accessCalendar(){
    this.navCtrl.navigateForward('calendar');
  }

  // Acceso directo a las tareas
  accessTasks(){
    this.navCtrl.navigateForward('tasks');
  }

  // Acceso directo a la información básica de la aplicación
  accessAbout(){
    this.navCtrl.navigateForward('about');
  }

  // Acceso directo a los apuntes
  accessApuntes(){
    this.navCtrl.navigateForward('apuntes');
  }

  // Botón para cierre de sesión.
  // Redirecciona a la página principal de la aplicación.
  async closeSession(){
    let alert = await this.alertCtrl.create({
      message: 'Estás a punto de cerrar sesión, ¿Estás seguro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // Al marcar el no, no se hace nada.
          }
        },
        {
          text: 'Aceptar',
          handler: () =>{
            // Envía a la página de acceso principal de la aplicación
            this.navCtrl.navigateForward('access');
          }
        }
      ]
    });
    alert.present();
  }
}
