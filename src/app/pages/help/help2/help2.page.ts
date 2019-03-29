import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-help2',
  templateUrl: './help2.page.html',
})
export class HelpPage2 {
    helpPage1: 'help2'

    constructor(public navCtrl: NavController){
        console.log('HelpPage2');
    }
}