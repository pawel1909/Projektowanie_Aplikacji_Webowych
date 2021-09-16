//imports
import { INoteList } from "./interfaces/INoteList";
import { NoteList } from "./objects/NoteList";
import { NoteColor } from "./enums/colors";
//funkcja testowa, nieużywana w końcowej wersji, ewentualnie do tworzenia z zapisu
import { createNotes } from "./TestFunctions/CreateNotes";
import { firebaseConfig } from "./config";
import { initializeApp } from "firebase/app";
import { jsonEval } from "@firebase/util";


//#region test
const firebaseApp = initializeApp(firebaseConfig);
//#endregion

const tested: boolean = false;

export class App {
    //elements
    repeatTitles: number = 1; // :C
    ID: number = 0; //unikalne ID kafelka, przydatne przy kasowaniu ( inaczej nie umiem )
    savedItems: number = 0; // To bedzie do sejwowania, ale jeszcze nie kozaczę tak bardzo
    modal: HTMLDivElement; // zapomniałem do czego to miało być xD SERIO
    noteForm: HTMLFormElement; //formularz dodawania notatki 
    noteTable: HTMLTableElement; //
    cancel: HTMLDivElement;
    noteList: NoteList[]; //lista obiektów stworzonych przez osobę, która używa strony
    // divs: NodeListOf<HTMLDivElement>;
    // notes: NodeListOf<HTMLTableElement>;
    noteDiv: HTMLDivElement;
    noteDeleteButtons: NodeListOf<HTMLButtonElement>;
    pinDiv: HTMLDivElement;
    pinButton: NodeListOf<HTMLButtonElement>;
    noteElement: NodeListOf<HTMLDivElement>;
    searchBar: HTMLInputElement;
    
    constructor() {
        
    }
    start(){
        //elements
        //localStorage.setItem('notatki', '');
        this.searchBar = document.querySelector('.searchBar');
        this.modal = document.querySelector('.modal');
        this.noteForm = document.querySelector('.note-form');
        this.noteTable = document.querySelector('.note-table');
        this.cancel = document.querySelector('.cancel-btn');
        this.noteList = JSON.parse(localStorage.getItem('.notes'));
        this.noteDiv = document.querySelector('.note-div');
        this.pinDiv = document.querySelector('.pinedNotes');
        
        this.searchBar.addEventListener('keyup', () => {
            console.log(this.searchBar.value);
            this.searching();
        });

        if (localStorage.getItem('notatki')) {
            this.noteList = this.getData();
            this.ID = this.noteList[this.noteList.length - 1].uniqueID + 1;
            console.log(this.noteList);
            this.noteList.forEach(notatka => {
                this.appendNotes(notatka);
            });
            this.refresh();

        }
        else{
            this.noteList = [];
        }
        //functions
        //createNotes();
        this.addNote(this.noteForm);
        // this.delaMe();
        // this.pinMe();
        //this.getDeleteButtons();
    }

    searching(): void {
        this.noteList.forEach(element => {
            let divElement: HTMLDivElement = <HTMLDivElement> document.querySelector(`#n${element.uniqueID.toString()}`);
            if (element.title.includes(this.searchBar.value)) {
                divElement.style.display = "block";
            }
            else{
                divElement.style.display = "none";
            }

        });
    }

    delMe(){
        this.noteDeleteButtons = document.querySelectorAll('.delete-item');

        this.noteDeleteButtons.forEach(button => {
            button.addEventListener('click', () =>{
                if (tested) {
                    console.log("Tytuł nad przyciskiem");
                    
                    console.log(button.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                }
                this.deleteNote(button.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.toString());
                this.saveData();
            });
        });
        
    }

    
    pinMe(){
        let i:number = 0;
        this.pinButton = document.querySelectorAll('.pinButton');

        this.pinButton.forEach(button => {
            button.addEventListener('click', () =>{
                if (tested) {
                    console.log("Tytuł nad przyciskiem");
                    
                    console.log(button.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                }
                console.log("PinMe" + i++);
                
                this.pin(button.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.toString());
                this.saveData();
            });
        });
        
    }

    addNote(noteForm: HTMLFormElement): void {
            noteForm.onsubmit = () => {
            let x = new Date();
            let title: HTMLInputElement = document.querySelector('.title');
            let note: HTMLInputElement = document.querySelector('.note');
                
            if (title.value === '' || note.value === '') {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                title.value = '';
                note.value = '';
                this.cancel.click();
                return;
            
            }
            else if (title.value.split(' ').length >= 2) {
                alert("Stwórz jednoczęściowy Tytuł lub użyj '_'. Proszę :C Nie umiem inaczej :/.");
                title.value = '';
                note.value = '';
                return;
            }
            else{
                
                if (this.isDoubled(title.value)) {
                    let newNote: NoteList = new NoteList(this.ID, (title.value + `(${this.repeatTitles++})`), note.value, x, NoteColor.red);
                        this.ID++;
                        
                        this.noteList.push(newNote);
                        //ZAPISYWANIE NARAZIE NIE DZIALA, ALE PEWNIE PO WIELU PROBACH DALEJ NIE BEDZIE DZIAŁAŁO :/
                        this.saveData();
                        
                        this.appendNotes(newNote);
                        title.value = '';
                        note.value = '';
                        this.cancel.click();
                }
                else {
                    let newNote: NoteList = new NoteList(this.ID, title.value, note.value, x, NoteColor.red);
                    this.ID++;
                    
                    this.noteList.push(newNote);
                    //ZAPISYWANIE NARAZIE NIE DZIALA, ALE PEWNIE PO WIELU PROBACH DALEJ NIE BEDZIE DZIAŁAŁO :/
                    this.saveData();
                    
                    this.appendNotes(newNote);
                    title.value = '';
                    note.value = '';
                    this.cancel.click();
                }
                
            }
        }
    }

    isDoubled(title: string): boolean {
        let tf: boolean = false;
        this.noteList.forEach(el => {
            if (el.title === title) {
                tf = true;
                return;
            }
        });
        return tf;
    }

    returnDiv(element: NoteList): HTMLDivElement {
        //#region Kafelek
        //Utworzenie "Kafelka" z notatką
        let div: any = document.createElement('div');
        div.classList = 'divNoteElement';
        div.id = "n" + element.uniqueID.toString();
        // Utworzenie "Kafelka" z Notatką
        let inDiv: HTMLDivElement = <HTMLDivElement>document.createElement('div');
        //inDiv.classList = 'inDivElement';
        inDiv.setAttribute('class', 'inDivElement');
        inDiv.style.width = "200px";
        inDiv.style.height = "auto";
        inDiv.textContent = element.note;
        //utworzenie "Kafelka" z Tytułem
        let divTitle: any = document.createElement('div');
        divTitle.classList = 'titleDiv';
        divTitle.innerText = "Tytuł: " + element.title;
        //Utworzenie "Kafelka" z datą
        let divDate: any = document.createElement('div');
        divDate.innerText = element.date;
        divDate.classList = 'dateDiv';
        // Utworzenie "Przycisku" do usuwania notatki, jeszcze nie działa
        let divDelete: any = document.createElement('button');
        divDelete.innerText = "Usuń";
        divDelete.classList = 'delete-item';
        //Dodanie przycisku do przypinania
        let pinBut: any = document.createElement('button');
        pinBut.classList = 'pinButton';
        pinBut.innerText = 'Przypnij';
        //Dodanie wszystkich "Kafelków" do całej notatki 
        div.appendChild(divTitle);
        div.appendChild(divDate);
        div.appendChild(inDiv);
        div.appendChild(divDelete);
        div.appendChild(pinBut);

        return div;
        
        //#endregion Kafelek
    }

    returnTable(element: NoteList): HTMLTableElement {
        
        //#region Tabela // Stworzenie tabeli //
        let tr: any = document.createElement('tr');
        tr.classList = 'noteItem';
        tr.id = "t" + element.uniqueID.toString();
        // Stworzenie kolumny z tytułem
        let tdTitle = document.createElement('td');
        tdTitle.innerText = element.title;
        // Stworzenie kolumny z Notatką
        let tdNote = document.createElement('td');
        tdNote.innerText = element.note;
        // Stworzenie Kolumny z przyciskiem do usunięcia, jeszcze nie działa
        let tdDelete = document.createElement('td');
        tdDelete.innerText = 'Usuń';
        tdDelete.classList.add('delete-item-table');
        // Dodanie Kolumn do tabeli
        tr.appendChild(tdTitle);
        tr.appendChild(tdNote);
        tr.appendChild(tdDelete);

        return tr;
        //#endregion Tabela

    }

    appendNotes(element: NoteList): void {
        this.noteTable.appendChild(this.returnTable(element));


        this.noteDiv.appendChild(this.returnDiv(element));

        
        this.getButtons();
        this.changeColor();
        //console.log(this.noteDeleteButtons/* [0].previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.split(' ')[1] */);
        this.noteElement = document.querySelectorAll('.divNoteElement');
    }

    getButtons(): void {
        this.noteDeleteButtons = document.querySelectorAll('.delete-item');
        this.pinDiv = document.querySelector('.pinedNotes');
        
        this.delMe();
        this.pinMe();
        // this.noteDeleteButtons.forEach(butt => {
        //     butt.onclick = () => {
        //         this.test();
        //     }
        // });
        // this.pinButton.forEach(butt => {
        //     butt.onclick = () => {
        //         this.test();
        //     }
        // });
    }

    deleteNote(noteTitle: string){
        if (tested) {
            console.log("deleteNote uruchomiło się");
            console.log(noteTitle);
            console.log("UDAŁO SIĘ");
        }
        for (let i = 0; i < this.noteList.length; i++) {
            
            if (this.noteList[i].title === noteTitle.split(' ')[1]) {
                if (this.noteList[i].pin) {
                    let deleteDiv: HTMLDivElement = <HTMLDivElement> document.querySelector(`#n${this.noteList[i].uniqueID.toString()}`);
                    console.log(deleteDiv);
                    
                    this.noteList.splice(i, 1);
                    this.pinDiv.removeChild(deleteDiv);
                }
                else{
                    let deleteDiv: HTMLDivElement = <HTMLDivElement> document.querySelector(`#n${this.noteList[i].uniqueID.toString()}`);
                    console.log(deleteDiv);
                    
                    this.noteList.splice(i, 1);
                    this.noteDiv.removeChild(deleteDiv);
                }
            }
            
        }
    }

    pin(noteTitle: string): void {
        let i: number = 1;
        this.noteList.forEach(el => {
            if (el.title === noteTitle.split(' ')[1].toString()) {
                //console.log(el);
                //console.log(this.noteElement);
                console.log("pin" + i++);
                
                
                //el.pined('test');
                if (el.pin) {
                    el.pin = false;
                }
                else{
                    el.pin = true;
                }
                console.log();
                
                //console.log(el.pin);
                
                this.refresh();
                return;
            }
        });
        
    }

    refresh(): void {
        //console.log(this.noteList);
        
        this.noteList.forEach(element => {
            let divElement: HTMLDivElement = <HTMLDivElement> document.querySelector(`#n${element.uniqueID.toString()}`);
            if (element.pin) {
                
                this.pinDiv.appendChild(divElement);
            }
            else{
                this.noteDiv.appendChild(divElement);
            }
        });
    }

    saveData() {
        localStorage.setItem('notatki', JSON.stringify(this.noteList));
    }
    getData(): NoteList[] {
        return JSON.parse(localStorage.getItem('notatki'));
    }
    
    changeColor(): void {
        let divs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.divNoteElement');
        let divContainer: HTMLDivElement = document.querySelector('.note-div');

        divs.forEach(el => {
            el.addEventListener('click', () => {
                //el.style.background = 'red';
                let x: HTMLDivElement = <HTMLDivElement>el.childNodes[2];
                let val: number = Math.round((Math.random() * 4));
                switch (val) {
                    case 0:
                        el.style.background = NoteColor[0];
                        
                        break;
                    case 1:
                        el.style.background = NoteColor[1];
                        break;
                    case 2:
                        el.style.background = NoteColor[2];
                        break;
                    case 3:
                        el.style.background = NoteColor[3];
                        break;
                
                    default:
                        break;
                }
                
                
            } );
        });
    }
    
}
export const AAA = 10;

