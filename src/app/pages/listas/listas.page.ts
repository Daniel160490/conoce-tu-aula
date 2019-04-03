import { Component, Input } from '@angular/core';
import { Lista } from 'src/app/models';
import { TareasService } from 'src/app/services/tareas.service';
import { NavController, AlertController, IonItemSliding } from '@ionic/angular';
import { AgregarPage } from '../agregar/agregar.page';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html'
})
export class ListasPage  {

  @Input() terminado: boolean = false;

  constructor(public tareasService: TareasService, private navCtrl: NavController, private alertCtrl: AlertController) { 
    console.log( 'ListasPage' );
  }

  // Metodo para seleccionar una lista
  listaSeleccionada( lista: Lista ){
    this.navCtrl.navigateForward('agregar');
  }

  // Metodo para eliminar una lista de tareas 
  borrarLista( lista: Lista ){
    this.tareasService.borrarTarea(lista);
  }

  // Metodo para editar una lista de tareas
  async editarLista(lista: Lista, slidingItem: IonItemSliding){

    slidingItem.close();

    const alerta = await this.alertCtrl.create({
      message: 'Editar el nombre de la lista',
      inputs: [ {
        name:'titulo',
        placeholder:'Nombre de la lista',
        value: lista.titulo
      }],
      buttons:[ {
        text: 'Cancelar'
      },{
        text: 'Guardar',
        handler: data => { 
          if( data.titulo.length === 0 ) {
            return;
          }
          lista.titulo = data.titulo;
          this.tareasService.guardarStorage();
        }
      }]
    });

    alerta.present();
  }
}
