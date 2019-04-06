
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class TareasService{

    list: any;
    
    constructor() {
        this.list = [[]];
    }

    getList(index) {
        let list = localStorage.getItem('pendientes' + index);
        if (list !== 'undefined' && list !== null) {
            this.list[index] = JSON.parse(list);
        }
        if (index >= this.list.length) {
            this.list.push([]);
        }

        return (this.list[index]);
    }

    saveList( listIndex ) {
        localStorage.setItem('pendientes' + listIndex, JSON.stringify(this.list[listIndex]));
    }

    getItem( itemIndex) {
        return (this.list[itemIndex]);
    }

    setItem( item, itemIndex ) {
        if (itemIndex == undefined) {
            this.list[itemIndex].push(Object.assign({}, item));
        } else {
            this.list[itemIndex] = Object.assign({}, item);
        }
        this.saveList(itemIndex);
    }

    deleteItem( listIndex, itemIndex ) {
        this.list[listIndex].splice(itemIndex, 1);
        this.saveList(listIndex);
    }

    deleteList( listIndex ) {
        this.list[listIndex].length = 0;
        this.saveList(listIndex);
    }

    moveItem( listIndex, from, to ) {
        let element = this.list[listIndex][from];
        this.list[listIndex].splice(from, 1);
        this.list[listIndex].splice(to, 0, element);
        this.saveList(listIndex);
    }

}