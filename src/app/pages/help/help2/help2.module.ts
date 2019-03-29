import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HelpPage2 } from './help2.page';

const routes: Routes = [
  {
    path: '',
    component: HelpPage2
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
    HelpPage2,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpPage2Module {}
