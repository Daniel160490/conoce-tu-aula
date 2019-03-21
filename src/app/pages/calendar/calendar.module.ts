import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalendarPage } from './calendar.page';
import { NgCalendarModule  } from 'ionic2-calendar';
import { EventModalPage } from '../event-modal/event-modal.page';




const routes: Routes = [
  {
    path: '',
    component: CalendarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CalendarPage, 
    EventModalPage
  ],
  entryComponents: [EventModalPage]
})
export class CalendarPageModule {}
