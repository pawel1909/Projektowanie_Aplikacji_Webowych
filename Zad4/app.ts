//import { INoteList } from './INoteList';
import { NoteList } from './Objects/NoteList';

interface INoteList {
    title: string;
    note: string;
}
//elements
let modal: HTMLDivElement;
let noteForm: HTMLFormElement;
let noteTable: HTMLTableElement;
let cancel: HTMLDivElement;
let noteList: INoteList[];
let divs: NodeListOf<HTMLDivElement>;
let notes: NodeListOf<HTMLTableElement>;
//Div
let noteDiv: HTMLDivElement;

modal = document.querySelector('.modal');
noteForm = document.querySelector('.note-form');
noteTable = document.querySelector('.note-table');
cancel = document.querySelector('.cancel-btn');
noteList = JSON.parse(localStorage.getItem('.notes'));
//Div
noteDiv = document.querySelector('.note-div');

if (noteList == null) {
    noteList = [];
} else {
    noteList = [];
}

noteForm.onsubmit = () => {
    const formData = new FormData(noteForm);
    let noteOne = new NoteList(1, "test", "testTest", "Red");
    console.log(noteOne);
    
    addNote(formData);
}

function addNote(formData: FormData):void {

    let newNote: INoteList = {title: 'test', note: 'test'};
    let title: HTMLInputElement = document.querySelector('.title');
    let note:HTMLInputElement = document.querySelector('.note');
    
    if (title.value === '' || note.value === '') {
        return alert('Nie możesz dodać pustej notatki, Sory.');
    } else {
        newNote.title = title.value;
        newNote.note = note.value;
    }

    title.value = '';
    note.value = '';

    noteList.push(newNote);
    console.log(noteList);
    appendNotes();
    cancel.click();
    
}

function appendNotes(): void {
    notes = document.querySelectorAll('.noteItem');
    divs = document.querySelectorAll('.divNoteElement');
    if (notes.length > 0 || divs.length > 0) {
        notes.forEach(note => {
            note.remove();
        })
        divs.forEach(div =>{
            div.remove();
        })
    }
    let x: Date;

    noteList.map(note => {
        x = new Date();
        let tr: any  = document.createElement('tr');
        tr.classList = 'noteItem';
        let tdTitle = document.createElement('td');
        tdTitle.innerText = note.title;
        let tdNote = document.createElement('td');
        tdNote.innerText = note.note;
        let tdDelete = document.createElement('td');
        tdDelete.innerHTML = '&times';
        tdDelete.classList.add('delete-item');

        //dla Div
        let div: any = document.createElement('div');
        let inDiv: any = document.createElement('div')
        let divTitle: any = document.createElement('div');
        let divDate: any = document.createElement('div');
        divTitle.innerText = "Tytuł: " + note.title;
        divDate.innerText = x.getHours() + "." + x.getMinutes() + "." + x.getSeconds();
        div.classList = 'divNoteElement';
        inDiv.classList = 'inDivElement';
        inDiv.textContent = note.note;
        div.appendChild(divTitle);
        div.appendChild(divDate);
        div.appendChild(inDiv);
        noteDiv.appendChild(div);
        
        console.log("test");
        

        tr.appendChild(tdTitle);
        tr.appendChild(tdNote);
        tr.appendChild(tdDelete);

        noteTable.appendChild(tr);
        getDeleteButtons();
        localStorage.setItem('notes', JSON.stringify(noteList));
    })
}

function getDeleteButtons(): void {
    let noteDeleteButtons: NodeListOf<HTMLTableDataCellElement> = document.querySelectorAll('.delete-item');
    noteDeleteButtons.forEach(button => {
        let noteTitle: string = button.previousElementSibling.previousElementSibling.innerHTML;
        
        button.addEventListener('click', () => {
            deleteNote(noteTitle);
        })
    })
}

function deleteNote(noteTitle) {
    for (let i = 0; i < noteList.length; i++) {
        if (noteList[i].title.toString() === noteTitle) {
            noteList.splice(i, 1);
            // console.log(noteTitle);
            
            // console.log(noteList[i].title);
            
            
        }
    }
    localStorage.setItem('notes', JSON.stringify(noteList));
    appendNotes();
}