import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  fechaCorta: string = new Date().toISOString();
  fecha: string = this.fechaCorta;
  minFecha: string = (new Date().getFullYear()-5).toString();
  maxFecha: string = (new Date().getFullYear()+5).toString();
  
  // Motivos por los que se puede pedir una reunión
  motivoReunion = [
    {
      title: 'Progreso del alumno',
      value: 'progress'
    },
    {
      title: 'Reunión informativa',
      value: 'info'
    },
    {
      title: 'Otros',
      value: 'others'
    }
  ]

  constructor(public navCtrl: NavController) { 
    console.log('PerfilPage');
    
  }

  ngOnInit() {
  }

  accessMessage(){
    this.navCtrl.navigateForward('mailbox');
  }

}
