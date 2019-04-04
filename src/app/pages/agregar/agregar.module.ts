import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, NavParams } from '@ionic/angular';

import { AgregarPage } from './agregar.page';

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
  declarations: [AgregarPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AgregarPageModule {}
