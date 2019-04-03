import { Component } from '@angular/core';
import { PendientesPage } from '../pendientes/pendientes.page';
import { TerminadasPage } from '../terminadas/terminadas.page';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html'
})
export class TasksPage {

  tab1Root = PendientesPage;
  tab2Root = TerminadasPage;
  tasksPage: 'tasks';

  constructor(public navCtrl: NavController) { 
    console.log('TasksPage');
    
  }
  // private tareasService: TareasService, public navCtrl: NavController
  // addTask(){
  //   this.navCtrl.navigateForward('/agregar');
  // }

  // Abre la pantalla de tareas pendientes
  openSlopes(){
    this.navCtrl.navigateForward('pendientes');
  }

  // Abre la pantalla de tareas terminadas
  openFinished(){
    this.navCtrl.navigateForward('terminadas');
  }

}
