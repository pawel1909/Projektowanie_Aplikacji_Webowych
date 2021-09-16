import { NoteList } from "../objects/NoteList";
import { INoteList } from "../interfaces/INoteList";
let space: HTMLDivElement = document.querySelector('.note-div')

export function createNotes(/*arr: NoteList[]*/): void {
    
    const elements: NoteList[] = [];
    for (let index = 0; index < 10; index++) {
        let title: string = `Tytuł${index}`;
        let note: string  = `notatka${index}`;
        let x: NoteList = new NoteList(index, title, note, new Date);
        elements.push(x);
    }
    elements.forEach(el => {
        space.appendChild(returnDiv(el));
    });
}

function returnDiv(element: NoteList): HTMLDivElement {
    //#region Kafelek
    //Utworzenie "Kafelka" z notatką
    let div: any = document.createElement('div');
    div.classList = 'divNoteElement';
    div.id = element.uniqueID.toString();
    // Utworzenie "Kafelka" z Notatką
    let inDiv: any = document.createElement('div');
    inDiv.classList = 'inDivElement';
    inDiv.textContent = element.note;
    //utworzenie "Kafelka" z Tytułem
    let divTitle: any = document.createElement('div');
    divTitle.classList = 'titleDiv';
    divTitle.innerText = "Tytuł: " + element.title;
    //Utworzenie "Kafelka" z datą
    let divDate: any = document.createElement('div');
    //divDate.innerText = getTime(x);
    //console.log(this.noteList[this.noteList.length - 1].date.getSeconds.toString());
    
    //divDate.innerText = x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
    divDate.innerText = element.date;
    divDate.classList = 'dateDiv';
    // Utworzenie "Przycisku" do usuwania notatki, jeszcze nie działa
    let divDelete: any = document.createElement('button');
    divDelete.innerText = "Usuń";
    divDelete.classList = 'delete-item';
    //Dodanie wszystkich "Kafelków" do całej notatki 
    div.appendChild(divTitle);
    div.appendChild(divDate);
    div.appendChild(inDiv);
    div.appendChild(divDelete);

    return div;
    
    //#endregion Kafelek
}