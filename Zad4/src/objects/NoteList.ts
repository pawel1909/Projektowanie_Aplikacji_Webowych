import { INoteList } from "../interfaces/INoteList";
import { NoteColor } from "../enums/colors";

export class NoteList implements INoteList {
    uniqueID: number;
    title: string;
    note: string;
    pin: boolean = false;
    color: string;
    date: string;
    day: string;

    constructor(id: number, title: string, note: string, date: Date, color?: NoteColor){
        this.uniqueID = id;
        this.title = title;
        this.note = note;
        this.color = this.changeColor(color);
        this.date = this.convertDate(date);
        this.day = this.convertDay(date);
    }

    convertDate(date: Date): string {
        return date.toLocaleTimeString();
    }

    convertDay(date: Date): string {
        return date.toLocaleDateString(); 
    }

    pined(st: string): void{
        this.pin = !this.pin;
        console.log(`Zmieniono ${this}`);
        
    }

    changeColor(newColor: NoteColor): string {
        if (newColor === NoteColor.red) {
            return 'Red'
        }
        else if (newColor === NoteColor.black) {
            return 'Black'
        }
        else if (newColor === NoteColor.white) {
            return 'White'
        }
        else if (newColor === NoteColor.yellow) {
            return 'Yellow'
        }
        else return 'Red'
    }
}