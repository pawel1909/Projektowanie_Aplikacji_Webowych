"use strict";
exports.__esModule = true;
exports.NoteList = void 0;
var NoteList = /** @class */ (function () {
    function NoteList(id, title, note, color) {
        this.id = id;
        this.title = title;
        this.note = note;
        this.color = color;
        this.pin = false;
        this.date = new Date();
    }
    NoteList.prototype.pined = function (bool) {
        this.pin = bool;
    };
    NoteList.prototype.changeColor = function (newColor) {
        this.color = newColor;
    };
    return NoteList;
}());
exports.NoteList = NoteList;
