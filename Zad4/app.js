"use strict";
exports.__esModule = true;
//import { INoteList } from './INoteList';
var NoteList_1 = require("./Objects/NoteList");
//elements
var modal;
var noteForm;
var noteTable;
var cancel;
var noteList;
var divs;
var notes;
//Div
var noteDiv;
modal = document.querySelector('.modal');
noteForm = document.querySelector('.note-form');
noteTable = document.querySelector('.note-table');
cancel = document.querySelector('.cancel-btn');
noteList = JSON.parse(localStorage.getItem('.notes'));
//Div
noteDiv = document.querySelector('.note-div');
if (noteList == null) {
    noteList = [];
}
else {
    noteList = [];
}
noteForm.onsubmit = function () {
    var formData = new FormData(noteForm);
    var noteOne = new NoteList_1.NoteList(1, "test", "testTest", "Red");
    console.log(noteOne);
    addNote(formData);
};
function addNote(formData) {
    var newNote = { title: 'test', note: 'test' };
    var title = document.querySelector('.title');
    var note = document.querySelector('.note');
    if (title.value === '' || note.value === '') {
        return alert('Nie możesz dodać pustej notatki, Sory.');
    }
    else {
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
function appendNotes() {
    notes = document.querySelectorAll('.noteItem');
    divs = document.querySelectorAll('.divNoteElement');
    if (notes.length > 0 || divs.length > 0) {
        notes.forEach(function (note) {
            note.remove();
        });
        divs.forEach(function (div) {
            div.remove();
        });
    }
    var x;
    noteList.map(function (note) {
        x = new Date();
        var tr = document.createElement('tr');
        tr.classList = 'noteItem';
        var tdTitle = document.createElement('td');
        tdTitle.innerText = note.title;
        var tdNote = document.createElement('td');
        tdNote.innerText = note.note;
        var tdDelete = document.createElement('td');
        tdDelete.innerHTML = '&times';
        tdDelete.classList.add('delete-item');
        //dla Div
        var div = document.createElement('div');
        var inDiv = document.createElement('div');
        var divTitle = document.createElement('div');
        var divDate = document.createElement('div');
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
    });
}
function getDeleteButtons() {
    var noteDeleteButtons = document.querySelectorAll('.delete-item');
    noteDeleteButtons.forEach(function (button) {
        var noteTitle = button.previousElementSibling.previousElementSibling.innerHTML;
        button.addEventListener('click', function () {
            deleteNote(noteTitle);
        });
    });
}
function deleteNote(noteTitle) {
    for (var i = 0; i < noteList.length; i++) {
        if (noteList[i].title.toString() === noteTitle) {
            noteList.splice(i, 1);
            // console.log(noteTitle);
            // console.log(noteList[i].title);
        }
    }
    localStorage.setItem('notes', JSON.stringify(noteList));
    appendNotes();
}
