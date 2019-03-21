import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.page.html',
  styleUrls: ['./mailbox.page.scss'],
})
export class MailboxPage implements OnInit {

  mailboxPage = 'mailbox';

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  openMessage(){
    this.navCtrl.navigateForward('mailbox-detail');

  }

}
