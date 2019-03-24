import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListasPage } from './listas.page';
import { FiltroCompletadoPipe } from 'src/app/pipes/filtro-completado/filtro-completado';

const routes: Routes = [
  {
    path: '',
    component: ListasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListasPage, FiltroCompletadoPipe]
})
export class ListasPageModule {}
