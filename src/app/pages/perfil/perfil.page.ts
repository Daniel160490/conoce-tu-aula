import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ProfeService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  @ViewChild(ContentChild, { read: ContentChild }) private content: ContentChild;
  fechaCorta: string = new Date().toISOString();
  fecha: string = this.fechaCorta;
  minFecha: string = (new Date().getFullYear() - 5).toString();
  maxFecha: string = (new Date().getFullYear() + 5).toString();
  confirm: boolean = false;
  isShown: boolean = false;

  customPopoverOptions: any = {
    header: 'Motivo de la reunión',
    translucent: true
  }

  // Motivos por los que se puede pedir una reunión
  motivoReunion: any = [
    {
      id: 1,
      title: 'Progreso del alumno',
      value: 'progress'
    },
    {
      id: 2,
      title: 'Reunión informativa',
      value: 'info'
    },
    {
      id: 3,
      title: 'Otros',
      value: 'others'
    }
  ]

  constructor(public _pfService: ProfeService, public navCtrl: NavController, private emailComposer: EmailComposer, public platform: Platform) {
    console.log('PerfilPage');
    this._pfService.cargarProfesor().subscribe(() => {

    });
  }

  ngOnInit() {
  }

  accessMessage() {
    this.navCtrl.navigateForward('mailbox');
  }

  // Envio de un correo electronico al pulsar el boton
  validateMessage() {

    let email = {

      to: 'Pablo1990_7@hotmail.com',
      cc: '',
      subject: 'Correo de prueba',
      body: 'Esto es un correo de prueba...',
      isHtml: true

    };
    console.log(email);

    this.emailComposer.open(email);
    console.log(this.emailComposer.open(email));

    // para enviar un correo al validar boton
    // https://es.stackoverflow.com/questions/187794/enviar-correo-desde-ionic

  }

  addAlumn() {
    this.navCtrl.navigateForward('usuarios');
  }

  scrollFunction(event: any){
    const dimensions = this.content.read.getContentDimensions(); // GET THE ion-content DIMENSIONS
    const bottomPosition = dimensions.contentHeight + dimensions.scrollTop; // THE contentHeight IS THE SIZE OF YOUR CONTENT SHOWN ON SCREEN, THE scrollTop IS HOW MUCH YOU'VE SCROLLED FROM TOP OF YOUR CONTENT.
    const screenSize = dimensions.scrollHeight; // TOTAL CONTENT SIZE
    this.isShown = screenSize - bottomPosition <= 10 ? true : false;
  }

  loadAlumnos() {
    this.navCtrl.navigateForward('alumnos');
  }

}
