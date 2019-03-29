import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HelpPage3 } from './help3.page';

const routes: Routes = [
  {
    path: '',
    component: HelpPage3
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
    HelpPage3,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpPage3Module {}
