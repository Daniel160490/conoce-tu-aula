import { Injectable } from '@angular/core';
import { Profesor } from '../models/profesor.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProfeService {

    public profesor: Profesor[] = [];
    private itemsCollection: AngularFirestoreCollection<Profesor>;


    constructor(private afs: AngularFirestore){

    }

    cargarProfesor(){
        this.itemsCollection = this.afs.collection<Profesor>('profesor');
    
        return this.itemsCollection.valueChanges().pipe(
            map((prof: Profesor[]) => {
                console.log(prof);
                this.profesor = [];
                for( let profe of prof){
                    this.profesor.unshift(profe);
                }
                return this.profesor;
            }));
    }
}