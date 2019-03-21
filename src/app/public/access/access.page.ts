import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {

  accessPage: 'access';

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

   login(){
    this.navCtrl.navigateForward('home');
  }

}
