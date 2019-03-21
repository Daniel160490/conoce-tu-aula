import { Component } from '@angular/core';
import { Lista, ListaItem } from 'src/app/models';
import { TareasService } from 'src/app/services/tareas.service';
import { NavParams, NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage  {
  
  lista: Lista;
  nombreItem: string = '';
  agregarPage: 'agregar';

  constructor(public tareaService: TareasService,private navParams: NavParams, public navCtrl: NavController ) {
   
    const titulo = this.navParams.get('titulo');
    if( this.navParams.get('lista')){
      this.lista = this.navParams.get('lista');
    } else {
      this.lista = new Lista( titulo );
      this.tareaService.agregarTarea(this.lista);
    }
  }

  agregarItem(){

    if(this.nombreItem.length === 0){
      return;
    }

    const nuevoItem = new ListaItem( this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.tareaService.guardarStorage();

    this.nombreItem = '';
  }


  actualizarItem( item: ListaItem ){
    item.completado = !item.completado;

    const pendientes = this.lista.items.filter( itemData => {
      return !itemData.completado;
    }).length;


    if(pendientes === 0){
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    } else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }

    this.tareaService.guardarStorage();
  }


  borrar( idx: number ){
    this.lista.items.splice( idx, 1);
    this.tareaService.guardarStorage();
  }

}
