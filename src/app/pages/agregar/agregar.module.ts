import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgregarPage } from './agregar.page';
import { TareasService } from 'src/app/services/tareas.service';
import { ListasPageModule } from '../listas/listas.module';
import { ListasPage } from '../listas/listas.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgregarPage]
})
export class AgregarPageModule {}
