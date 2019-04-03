import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
})
export class PendientesPage {


  constructor(public tareasService: TareasService, private navCtrl: NavController, private alertCtrl: AlertController) { 
    console.log('PendientesPage');
  }

  async agregarLista(){
    // Mensaje de alerta.
    const alerta = await this.alertCtrl.create({

      message: 'Nombre para la lista de tareas',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      }],
      buttons:[{
        text: 'Cancelar'
      },{
        text: 'Agregar',
        handler: data => {
          if(data.titulo.length === 0) {
            return;
          }
          this.navCtrl.navigateForward('agregar');
        }
      }]
    });

   alerta.present();
  }

}
