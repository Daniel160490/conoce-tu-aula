import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-help1',
  templateUrl: './help1.page.html',
})
export class HelpPage1 {
    helpPage1: 'help1'

    constructor(public navCtrl: NavController){
        console.log('HelpPage1');
    }
}