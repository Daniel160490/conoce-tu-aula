import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalendarPage } from './calendar.page';
import { NgCalendarModule  } from 'ionic2-calendar';
import { EventModalPage } from '../event-modal/event-modal.page';
import { monthName } from 'src/app/pipes/month-name';
import { weekdayName } from 'src/app/pipes/weekday-name';


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
    EventModalPage,
    monthName,
    weekdayName
  ],
  entryComponents: [EventModalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalendarPageModule {}
