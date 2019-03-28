import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {

  accessPage: 'access';
  titleApp: 'Conoce tu aula';


  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

   login(){
    this.navCtrl.navigateForward('login');
  }

  signup(){
    this.navCtrl.navigateForward('register');
  }

}
