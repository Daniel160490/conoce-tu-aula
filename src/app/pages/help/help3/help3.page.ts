import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-help3',
  templateUrl: './help3.page.html',
  styleUrls: ['./help3.page.scss']
})
export class HelpPage3 {

  helpPage1: 'help3';
  aprobacion: boolean = false;
  desaprobacion: boolean = false;


  constructor(public navCtrl: NavController) {
    console.log('HelpPage3');
  }

  // Muestra el card de validacion y oculta el de desaprobacion
  aprobacionBuena() {
    this.aprobacion = true;
    this.desaprobacion = false;
  }


  aprobacionMala() {
    this.desaprobacion = true;
    this.aprobacion = false;
  }
}