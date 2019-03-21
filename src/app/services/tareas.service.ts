import { Lista } from './../models/lista.model';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class TareasService{

    listas: Lista[] = [];

    constructor(){
        //Al cargar la pantalla carga las tareas si las hay
        this.cargarStorage();
    }

    // Añade una tarea nueva
    agregarTarea( lista: Lista){
        this.listas.push( lista );
        this.guardarStorage();
    }

    // Borra una tarea seleccionada
    borrarTarea( lista: Lista ){
        this.listas = this.listas.filter( listData => {
            return listData.id !== lista.id;
        });
        this.guardarStorage();
    }

    // Guarda las tareas en local
    // TODO guardar en base de datos
    guardarStorage(){
        localStorage.setItem('data', JSON.stringify( this.listas ));
    }

    // Carga las tareas desde local
    // TODO guardar en base de datos
    cargarStorage(){
        /*
            1 - comprueba que el almacenamiento local esta con datos.
            2 - si contiene datos los recoge de un JSON.
            3 - si no contiene solo tendriamos un arreglo vacio de listas.
            4 - este metodo se llama una sola vez, al iniciar esta clase.
        */
        if( localStorage.getItem('data')){
            this.listas = JSON.parse( localStorage.getItem('data'));
        } else {
            this.listas = [];
        }
    }
}