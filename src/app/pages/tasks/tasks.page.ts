import { Component, ViewChild } from '@angular/core';
import { PendientesPage } from '../pendientes/pendientes.page';
import { TerminadasPage } from '../terminadas/terminadas.page';
import { NavController, AlertController, IonTabs } from '@ionic/angular';
import { TareasService } from 'src/app/services/tareas.service';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss']
})
export class TasksPage {

  tasksPage: 'tasks';
 
  constructor(public navCtrl: NavController,) { 
    console.log('TasksPage');
  }

   // Abre la pantalla de tareas pendientes
   openSlopes(){
    this.navCtrl.navigateForward('pendientes');
  }

  // Abre la pantalla de tareas terminadas
  openFinished(){
    this.navCtrl.navigateForward('terminadas');
  }

  abrirApuntes(){
    this.navCtrl.navigateForward('apuntes');
  }
}
