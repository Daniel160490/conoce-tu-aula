import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  constructor(public navCtrl: NavController) { }

  // Acceso al componente de ayuda al usuario
  openHelp(){
    this.navCtrl.navigateForward('help');
  }

  closeApp(){
    this.navCtrl.navigateForward('access');
  }

}
