import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { NavController } from '@ionic/angular';
import { Alumnos } from 'src/app/models/alumnos.model';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  data: any;
  alumnos: Alumnos[];

  constructor(public alumService: AlumnosService, public navCtrl: NavController) { 
    
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

  removeAlumn(al) {
    this.alumService.removeAlumn(al.id);
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 2000);
  }

}
