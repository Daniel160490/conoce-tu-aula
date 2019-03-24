import { Component } from '@angular/core';
import { PendientesPage } from '../pendientes/pendientes.page';
import { TerminadasPage } from '../terminadas/terminadas.page';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html'
})
export class TasksPage {

  tab1Root = PendientesPage;
  tab2Root = TerminadasPage;
  tasksPage: 'tasks';

  constructor() { 
    console.log('TasksPage');
    
  }
  // private tareasService: TareasService, public navCtrl: NavController
  // addTask(){
  //   this.navCtrl.navigateForward('/agregar');
  // }

}
