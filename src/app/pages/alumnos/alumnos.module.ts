import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { IonicModule } from '@ionic/angular';

import { AlumnosPage } from './alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFireDatabaseModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlumnosPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AlumnosPageModule {}
