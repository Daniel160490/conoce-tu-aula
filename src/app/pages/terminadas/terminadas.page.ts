import { Component, ViewChild } from '@angular/core';
import { ListasPage } from '../listas/listas.page';

@Component({
  selector: 'app-terminadas',
  templateUrl: './terminadas.page.html',
  styleUrls: ['./terminadas.page.scss'],
})
export class TerminadasPage {

  @ViewChild(ListasPage) pendientes: ListasPage;
  
  constructor() { }



}
