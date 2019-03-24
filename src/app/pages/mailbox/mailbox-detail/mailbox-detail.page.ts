import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-mailbox-detail',
  templateUrl: './mailbox-detail.page.html',
  styleUrls: ['./mailbox-detail.page.scss'],
})
export class MailboxDetailPage implements OnInit {

  mailboxDetailPage: 'mailbox-detail';

  data = { type:'', nickname:'', message:'' };
  chats = [];
  roomkey:string;
  nickname:string;
  offStatus:boolean = false;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  enviarMensaje() {

  }
  

}
