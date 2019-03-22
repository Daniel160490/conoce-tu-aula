import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TasksPage } from './tasks.page';
import { PendientesPage } from '../pendientes/pendientes.page';
import { TerminadasPage } from '../terminadas/terminadas.page';
import { TareasService } from 'src/app/services/tareas.service';
import { ListasPage } from '../listas/listas.page';
import { AgregarPage } from '../agregar/agregar.page';
import { FiltroCompletadoPipe } from 'src/app/pipes/filtro-completado/filtro-completado';

const routes: Routes = [
  {
    path: '',
    component: TasksPage,
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TasksPage,
    PendientesPage,
    TerminadasPage,
    ListasPage,
    AgregarPage,
    FiltroCompletadoPipe
  ],
  entryComponents: [
    PendientesPage,
    TerminadasPage,
    AgregarPage
  ],
  providers: [
    TareasService
  ]
})
export class TasksPageModule {}
