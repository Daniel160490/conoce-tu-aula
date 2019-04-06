import { Component } from '@angular/core';
import { Lista, ListaItem } from 'src/app/models';
import { TareasService } from 'src/app/services/tareas.service';
import { NavParams, NavController, AlertController } from '@ionic/angular';
import { PendientesPage } from '../pendientes/pendientes.page';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage   {
  
  item: any;
  tabIndex: number;
  itemIndex: number;
  buttons: Array<string>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              public alertController: AlertController,
              private ListService: TareasService) { 
    this.buttons = ["radio-button-off", "radio-button-on", "snow", "flame"];
    this.itemIndex = +this.route.snapshot.paramMap.get('item'); 
    if (this.itemIndex >= 0) {
      this.item = Object.assign({}, this.ListService.getItem( this.itemIndex));
      //this.item.date = new Date(this.item.date).toISOString();
    }
    else {
      this.item = { date: new Date().toISOString(), task: '', icon: 'radio-button-off'};
    } 
  }

  async error(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  save() {
    if (!this.item.task.length) {
      this.error('The task cannot be empty');
    }
    else {
      //this.item.date = document.querySelector('.datetime-text').innerHTML;
      if (this.itemIndex >= 0) {
        this.ListService.setItem(this.item, this.itemIndex);
      }
      else {
        this.ListService.setItem(this.item, null);      
      }
      this.router.navigate(['pendientes']);
    }
  }

}
