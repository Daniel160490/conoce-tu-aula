
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);
  public usuario: any = {};
 
  constructor( private afs: AngularFirestore ) { 
    
    
  }
 
  login( proveedor: string ) {
    // this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
 
  logout() {
    // Limpia el objeto para salir
    // this.usuario = {};
    // this.afAuth.auth.signOut();
  }
 
  
}
