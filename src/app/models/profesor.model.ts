import { ListaCursos } from './lista-cursos.model';
import { ListaClases } from './lista-clases.model';

export class Profesor {
    id: number;
    nombre: string;
    cursos: ListaCursos[];
    clasesImparte: ListaClases[];
  
    constructor( nombre: string ) {
        this.nombre = nombre;
        this.cursos = [];
        this.clasesImparte = [];
    }
}