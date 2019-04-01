import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-help1',
  templateUrl: './help1.page.html',
})
export class HelpPage1 {

    helpPage1: 'help1'
    aprobacion: boolean = false;
    desaprobacion: boolean = false;

    constructor(public navCtrl: NavController){
        console.log('HelpPage1');
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