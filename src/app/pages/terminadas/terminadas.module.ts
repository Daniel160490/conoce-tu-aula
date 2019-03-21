import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TerminadasPage } from './terminadas.page';
import { ListasPage } from '../listas/listas.page';

const routes: Routes = [
  {
    path: '',
    component: TerminadasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TerminadasPage, ListasPage ]
})
export class TerminadasPageModule {}
