import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, AlertController, ActionSheetController } from '@ionic/angular';
import * as moment from 'moment';
import { EventModalPage } from '../event-modal/event-modal.page';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  isToday: boolean;
  selectedObject;

  calendarModes = [
    { key: 'month', value: 'Mes' },
    { key: 'week', value: 'Semana' },
    { key: 'day', value: 'Día' }
  ]

  calendar = {
    mode: this.calendarModes[0].key,
    currentDate: new Date()
  };

  constructor(
    public navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController, 
    private modalCtrl: ModalController, 
    private alertCtrl: AlertController) { 
  
  }

  // Metodo para cambiar el modo del calendario, si es por mes, dia o semana
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Metodo para añadir un evento nuevo
  async addEvent() {
    
    const modal = await this.modalCtrl.create({
      component: EventModalPage,
      componentProps: {selectedDay: this.selectedDay}
    });
    
    modal.onDidDismiss().then(data => {
      if(data){
        let eventData = data;
        let events = this.eventSource;
       
        eventData.data.startTime = new Date(data.data.startTime);
        eventData.data.endTime = new Date(data.data.endTime);

        events.push(eventData);
        this.eventSource = [];
        setTimeout(()=>{
          this.eventSource = events;
        });
      }
    });

    modal.present();
    
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  async onEventSelected(event) {
    
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = await  this.alertCtrl.create({
      // title: '' + event.title,
      message: 'Desde: ' + start + '<br>Hasta: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();

    this.selectedDay = event

  }

  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return (date < current);
  };

  onOptionSelected($event: any) {
    console.log($event)
    this.calendar.mode = $event
  }
 
  
}



// guia para calendario
// https://stackblitz.com/edit/ionic-calendar-scheduler?file=app%2Fapp.component.ts
// https://devdactic.com/ionic-calendar-app/