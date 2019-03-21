import { Component } from '@angular/core';
import * as moment from 'moment';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { of } from 'rxjs';

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
  

  // event = {
  //   startTime: new Date().toISOString(),
  //   endTime: new Date().toISOString(),
  //   allDay: false,
  //   room : {}
  // };
  // minDate = new Date().toISOString();
  // rooms$ = of([{ id: "room1", name: "room1" }, { id: "room2", name: "room2" }, { id: "room3", name: 'room3'}])


  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ModalController) {
    
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
   
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  save(){
    this.viewCtrl.dismiss(this.event);
  }

  // optionSelected($event){
  //   this.event.room = $event;
  // }

}
