import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mailbox-detail',
  templateUrl: './mailbox-detail.page.html',
  styleUrls: ['./mailbox-detail.page.scss'],
})
export class MailboxDetailPage implements OnInit {

  mailboxDetailPage: 'mailbox-detail';

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

}
