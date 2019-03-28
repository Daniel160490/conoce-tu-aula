import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private  authService:  AuthenticationService, private  router:  Router) { }

  ngOnInit() {
  }

  register(form) {
    // this.authService.register(form.value).subscribe((res) => {
    //   this.router.navigateByUrl('home');
    // });
  }

}
