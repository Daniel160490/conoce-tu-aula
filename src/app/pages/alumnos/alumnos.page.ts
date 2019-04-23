import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { NavController, AlertController } from '@ionic/angular';
import { Alumnos } from 'src/app/models/alumnos.model';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  usuariosUpdatePage: 'UsuariosUpdatePage';
  data: any;
  alumnos: Alumnos[];

  constructor(public alumService: AlumnosService, public navCtrl: NavController, public alertCtrl : AlertController) { 
    
    console.log('AlumnosPage');
    this.alumService.cargarAlumnos().subscribe(res => {
      this.alumnos = res;
    });
    
  }

  ngOnInit() {
  }

  addAlumn() {
    this.navCtrl.navigateForward('usuarios');
  }

  // removeAlumn(al) {
  //   this.alumService.removeAlumn(al.id);
  // }

  async borrar(al){
    let alert = await this.alertCtrl.create({
      message: '¿Seguro que quieres borrar este alumno?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // Se responde que no, no se hace nada.
          }
        },
        {
          text: 'Si',
          handler: () => {
            //Aqui se borra el alumno
            this.alumService.removeAlumn(al.id);
          }
        }
      ]
    });

    alert.present();
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 1000);
  }

  openUpdatePage(al){
    this.navCtrl.navigateForward('usuarios-update', al);
  }


  // DOCUMENTACION
  // https://www.techiediaries.com/ionic-2-navigation/
}
