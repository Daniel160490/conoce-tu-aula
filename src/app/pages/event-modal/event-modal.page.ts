import { Component } from '@angular/core';
import * as moment from 'moment';
import { NavController, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss'],
})
export class EventModalPage {
  
  
  event = { 
    startTime: new Date().toISOString(), 
    endTime: new Date().toISOString(), 
    allDay: false,
    title: '' 
  };
  minDate = new Date().toISOString();

  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ModalController) {
    
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
    console.log('EventModal');
    
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  save(){
    this.viewCtrl.dismiss(this.event);
  }


}
