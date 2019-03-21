import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TareasService } from 'src/app/services/tareas.service';


import { PendientesPage } from '../pendientes/pendientes.page';
import { TerminadasPage } from '../terminadas/terminadas.page';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html'
})
export class TasksPage {

  tab1Root = PendientesPage;
  tab2Root = TerminadasPage;


  constructor() { }
  // private tareasService: TareasService, public navCtrl: NavController
  // addTask(){
  //   this.navCtrl.navigateForward('/agregar');
  // }

}
