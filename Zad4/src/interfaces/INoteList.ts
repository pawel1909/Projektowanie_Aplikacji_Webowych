import { NoteColor } from "../enums/colors";

export interface INoteList {
    uniqueID: number;
    title: string;
    note: string;
    pin: boolean;
    color: string;
    date: string;

    convertDate(date: Date): string;
}