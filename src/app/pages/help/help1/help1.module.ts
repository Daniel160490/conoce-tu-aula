import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HelpPage1 } from './help1.page';

const routes: Routes = [
  {
    path: '',
    component: HelpPage1
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
    HelpPage1,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpPage1Module {}
