import { Component, OnInit, Input } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumnos } from 'src/app/models/alumnos.model';

@Component({
    selector: 'app-usuarios-update',
    templateUrl: './usuarios-update.page.html'
})
export class UsuariosUpdatePage implements OnInit {

    alumnos: Alumnos[];
    alumnoNombre: string;
    alumnoApellidoUno: string;
    alumnoApellidoDos: string;
    alumnoClase: string;
    usuariosPAge: 'usuariosPage';
    idSelected: any;
    nuevoAlumno = {
        nombre: null,
        apellidoUno: null,
        apellidoDos: null,
        clase: null,
        usuario: null,
        password: null
    }

    constructor(public alumService: AlumnosService, 
                public alertController: AlertController, 
                public navCtrl: NavController, 
                public formBuilder: FormBuilder) 
    {
        console.log('UsuariosUpdatePage');
        this.alumService.cargarAlumnos().subscribe(res => {
            this.alumnos = res;
        });
    }

    ngOnInit(){
        
    }

    // Metodo para guardar un alumno nuevo
    saveAlumn(alumno: Alumnos){
       this.alumService.actualizarAlumno(alumno, null).then(() => {
           this.navCtrl.navigateForward('alumnos');
       })
        
    }

    // Mensaje de alerta para usuario añadido correctamente.
    async presentAlert(){
        const alert = await this.alertController.create({
        header: '¡Añadido!',
        message: 'Alumno añadido correctamente al aula',
        buttons: ['ACEPTAR']
        });

        await alert.present();
    }

    updateAlumn(){

    }
}