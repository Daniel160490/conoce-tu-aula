import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, IonTabs } from '@ionic/angular';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
})
export class PendientesPage {

  @ViewChild('myTabs') tabRef: IonTabs;
  tabs: any;
  tabIndex: number;
  reorder: boolean;

  constructor(public tareasService: TareasService, public navCtrl: NavController, public alertCtrl: AlertController) { 
    console.log('PendientesPage');

    this.tabs = [
      {label: 'School', icon: 'school', list: []},
      {label: 'Home', icon: 'home', list: []}
    ];
    this.tabs.forEach((tab, index) => {
      tab.list = this.tareasService.getList(index);
    });
    this.tabIndex = 0;
    this.reorder = false;
  }

  setTab(tabIndex) {
    this.tabIndex = tabIndex;
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
          this.navCtrl.navigateForward('agregar', data);
        }
      }]
    });

   alerta.present();
  }

  async deleteItem(item?) {
    const alert = await this.alertCtrl.create({
      header: item === undefined ? 'Borrar todas' : 'Borrar tarea',
      message: '¿Estas seguro?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (item === undefined) {
              this.tareasService.deleteList(this.tabIndex);
            }
            else {
              this.tareasService.deleteItem(this.tabIndex, item);              
            }
          }
        },       
        {
          text: 'CANCELAR',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  toggleReorder() {
    this.reorder = !this.reorder;
  }

}
