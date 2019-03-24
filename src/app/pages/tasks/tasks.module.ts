import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TasksPage } from './tasks.page';
import { TareasService } from 'src/app/services/tareas.service';
import { FiltroCompletadoPipe } from 'src/app/pipes/filtro-completado/filtro-completado';
import { PendientesPageModule } from '../pendientes/pendientes.module';
import { TerminadasPageModule } from '../terminadas/terminadas.module';
import { AgregarPageModule } from '../agregar/agregar.module';
import { PendientesPage } from '../pendientes/pendientes.page';
import { TerminadasPage } from '../terminadas/terminadas.page';
import { AgregarPage } from '../agregar/agregar.page';

const routes: Routes = [
  {
    path: '',
    component: TasksPage,
  }
]


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendientesPageModule,
    TerminadasPageModule,
    AgregarPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TasksPage,
    FiltroCompletadoPipe
  ],
  entryComponents: [
    PendientesPage,
    TerminadasPage,
    AgregarPage
  ],
  providers: [
    TareasService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TasksPageModule {}
