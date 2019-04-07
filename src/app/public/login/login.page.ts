import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginPage = 'login';
  user = {} as Usuario;
  
  
  constructor(
    public navCtrl: NavController
	) {
		
  }
  

  
  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateForward('home');
  }

}



// manual de login?
// https://guiadev.com/manual-de-ionic-framework-parte-04/

// https://ionicthemes.com/tutorials/about/ionic-google-login