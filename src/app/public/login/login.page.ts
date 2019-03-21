import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginPage = 'login';
  loginForm: FormGroup;
	loginError: string;
 
  
  
	constructor(
    private navCtrl: NavController,
    fb: FormBuilder,
    public _cs: AuthenticationService
	) {
		
  }
  

  
  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateForward('access');
  }

  // Metodo para llamar a la autentificacion
  ingresar( proveedor: string){
    this._cs.login(proveedor);
  }
}



// manual de login?
// https://guiadev.com/manual-de-ionic-framework-parte-04/