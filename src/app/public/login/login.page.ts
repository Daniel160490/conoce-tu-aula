import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginPage = 'login';
 
  
  
	constructor(
    private navCtrl: NavController,
    private  authService:  AuthenticationService, private  router:  Router
	) {
		
  }
  

  
  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateForward('home');
  }

  // Metodo para llamar a la autentificacion
  // ingresar( proveedor: string){
  //   this.authService.login(proveedor);
  // }
}



// manual de login?
// https://guiadev.com/manual-de-ionic-framework-parte-04/

// https://ionicthemes.com/tutorials/about/ionic-google-login