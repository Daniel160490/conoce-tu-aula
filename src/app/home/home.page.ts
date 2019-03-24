import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  home = 'home';
  titulo = 'Conoce tu aula';
  
  
  constructor(public navCtrl: NavController){
    console.log('HomePage');
    
  }

  // Acceso a la pantalla de login
  accessLogin(){
    this.navCtrl.navigateForward('login');
  }

  accessCalendar(){
    this.navCtrl.navigateForward('calendar');
  }

  accessTasks(){
    this.navCtrl.navigateForward('tasks');
  }

  accessAbout(){
    this.navCtrl.navigateForward('about');
  }
}
