import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-help2',
  templateUrl: './help2.page.html',
  styleUrls: ['./help2.page.scss']
})
export class HelpPage2 {
    
  helpPage1: 'help2';
  aprobacion: boolean = false;
  desaprobacion: boolean = false;

  constructor(public navCtrl: NavController){
    console.log('HelpPage2');
  }

  // Muestra el card de validacion y oculta el de desaprobacion
  aprobacionBuena(){
    this.aprobacion = true;
    this.desaprobacion = false;
  }


  aprobacionMala(){
    this.desaprobacion = true;
    this.aprobacion = false;
  }
}