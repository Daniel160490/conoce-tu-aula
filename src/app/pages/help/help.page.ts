import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['help.page.scss']
})
export class HelpPage  {

  helpPage: 'help'; 
  url = 'https://ejemplo.com';
  
  constructor(public navCtrl: NavController, private socialSharing: SocialSharing, private file: File) { 
    console.log('HelpPage');
    
  }

  abrirReunion(){
    this.navCtrl.navigateForward('help1');
  }

  abrirTareas(){
    this.navCtrl.navigateForward('help2');
  }

  abrirQueHacer(){
    this.navCtrl.navigateForward('help3');
  }

  // Compartir aplicacion a través de correo electrónico
  shareEmail(){
    // Check si es posible enviar
    this.socialSharing.canShareViaEmail().then(() => {
      // Es posible enviar por email
      console.log('Se ha enviado correctamente a través de correo electrónico');
      
    }).catch(() => {
      // No se puede enviar por email
      console.log('No ha sido posible enviar a través de correo.');
      
    });

    //Enviar correo
    this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      //Enviado
    }).catch(() => {
      // Error
    });
  }

  async shareFacebook(){
    // let file = await this.resolveLocalFile();
 
    // // Image or URL works
    // this.socialSharing.shareViaFacebook(null, file.nativeURL, null).then(() => {
    //   this.removeTempFile(file.name);
    // }).catch((e) => {
    //   // Error!
    // });
  }

  async shareTwitter(){
    // Either URL or Image
    this.socialSharing.shareViaTwitter(null, null, this.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }






  // DOCUMENTACION PARA COMPARTIR APLICACION CON REDES SOCIALES
  // https://ionicframework.com/docs/native/social-sharing

  // https://ionicacademy.com/ionic-social-sharing/

}
