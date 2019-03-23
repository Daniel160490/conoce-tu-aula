import { Component, ViewChild } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { NavController, AlertController } from '@ionic/angular';
import { ListasPage } from '../listas/listas.page';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
})
export class PendientesPage {

  @ViewChild(ListasPage) pendientes: ListasPage;

  constructor( public tareaService: TareasService, private navCtrl: NavController, private alertCtrl: AlertController) { }
  async agregarLista(){
    // Mensaje de alerta.
    const alerta = await this.alertCtrl.create({
      // title: 'Nueva lista',
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
