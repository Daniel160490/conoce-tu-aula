import { Injectable } from '@angular/core';
import { Alumnos } from '../models/alumnos.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AlumnosService {

    public alumnos: Alumnos[] = [];
    private itemsCollection: AngularFirestoreCollection<Alumnos>;

    constructor(private afs: AngularFirestore, public router: Router) {
        
    }

    actualizarAlumno(alumno: Alumnos, id: string) {
        return this.itemsCollection.doc(id).update(alumno);
    }
    
    // Añadir un alumno
    addItems(name){
        return this.afs.collection('/alumnos/').add(name);
    }

    // Eliminar un alumno
    removeAlumn(id) {
        return this.itemsCollection.doc(id).delete();
    }
    
     

    cargarAlumnos() {
        this.itemsCollection = this.afs.collection<Alumnos>('alumnos');

        return this.itemsCollection.valueChanges().pipe(
            map((alumn: Alumnos[]) => {
                console.log(alumn);
                this.alumnos = [];
                for (let al of alumn) {
                    this.alumnos.unshift(al);
                }
                return this.alumnos;
            })
        );
    }
}