import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['help.page.scss']
})
export class HelpPage  {

  helpPage: 'help'; 
  
  constructor(public navCtrl: NavController) { 
    console.log('HelpPage');
    
  }

  abrirReunion(){
    this.navCtrl.navigateForward('help1');
  }

  abrirTareas(){
    this.navCtrl.navigateForward('help2');
  }

  abrirQueHacer(){
    this.navCtrl.navigateForward('help3');
  }

}
