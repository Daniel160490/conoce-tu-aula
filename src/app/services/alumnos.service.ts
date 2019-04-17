import { Injectable } from '@angular/core';
import { Alumnos } from '../models/alumnos.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AlumnosService {

    public alumnos: Observable<Alumnos[]>;
    public alum;
    private itemsCollection: AngularFirestoreCollection<Alumnos>;

    constructor(private afs: AngularFirestore, public router: Router) {
        this.itemsCollection = afs.collection<Alumnos>('alumnos');

        this.alumnos = this.itemsCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    actualizarAlumno(alumno, id: string) {
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

    getAlumnos() {
        return this.alumnos;
    }

    getAlumno(id) {
        return this.itemsCollection.doc<Alumnos>(id).valueChanges();
    }
   
    cargarAlumnos() {
        this.itemsCollection = this.afs.collection<Alumnos>('alumnos');

        return this.itemsCollection.valueChanges().pipe(
            map((alumn: Alumnos[]) => {
                console.log(alumn);
                this.alum = [];
                for (let al of alumn) {
                    this.alum.unshift(al);
                }
                return this.alum;
            })
        );
    }
}




// EJEMPLO DE CRUD
// https://grokonez.com/firebase/ionic-3-firebase-example-crud-operations-with-firebase-realtime-database