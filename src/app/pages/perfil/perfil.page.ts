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
  confirm: boolean = false;
  
  customPopoverOptions: any = {
    header: 'Motivo de la reunión',
    translucent: true
  }
  // Motivos por los que se puede pedir una reunión
  motivoReunion: any = [
    {
      id: 1,
      title: 'Progreso del alumno',
      value: 'progress'
    },
    {
      id: 2,
      title: 'Reunión informativa',
      value: 'info'
    },
    {
      id: 3,
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

  validateMessage(){
    
    // para enviar un correo al validar boton
    // https://es.stackoverflow.com/questions/187794/enviar-correo-desde-ionic
    
  }

}
