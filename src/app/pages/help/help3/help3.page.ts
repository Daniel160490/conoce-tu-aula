import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-help3',
  templateUrl: './help3.page.html',
})
export class HelpPage3 {
    helpPage1: 'help3'

    constructor(public navCtrl: NavController){
        console.log('HelpPage3');
    }
}