import { INoteList } from "../Interfaces/INoteList"

export class NoteList implements INoteList {
    id: number;
    title: string;
    note: string;
    color: string;
    pin: boolean;
    date: Date;

    constructor(id: number, title: string, note:string, color: string){
        this.id = id;
        this.title = title;
        this.note = note;
        this.color = color;
        this.pin = false;
        this.date = new Date();
    }

    pined(bool: boolean){
        this.pin = bool;
    }


    changeColor(newColor: string) {
        this.color = newColor;
    }

}