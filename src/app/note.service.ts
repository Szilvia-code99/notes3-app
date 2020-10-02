import { Injectable } from '@angular/core';
import { Note } from './note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
 notes: Note[];
  readonly baseUrl = 'https://dev-notesapi.mepdevelopment.com/api';
  ownerId = '00000000-0000-0000-0000-000000000009';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private httpClient: HttpClient) { }
  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(
      this.baseUrl + `/notes/owner/${this.ownerId}`,
      this.httpOptions);
  }

  addNote(notetitle: string, notetext: string, notetextcolor: string, notecolor: string, notecategory: string): void {
    let note = {
      text: notetext,
      title: notetitle,
      textColor: notetextcolor,
      color: notecolor,
      ownerId: this.ownerId,
      category: notecategory,
      pinned: true
    };
    this.httpClient.post<Note>( this.baseUrl + `/Notes`, note, this.httpOptions).subscribe({
        error: error => console.error('There was an error!', error)});
  }

  updateNoteCategory(note: Note, newCategory: string): void{
    this.httpClient.put<Note>( this.baseUrl + `/Notes/${note.id}`, {
      id: note.id,
      title: note.title,
      text: note.text,
      category: newCategory,
      ownerId: note.ownerId,
      textColor: note.textColor,
      color: note.color,
      pinned: note.pinned}, this.httpOptions).subscribe(
        val => {
            console.error('PUT call successful value returned in body', val);
        },
        response => {
            console.error('PUT call in error', response);
        },
        () => {
            console.error('The PUT observable is now completed.');
        }
    );
  }

  deleteNote(note: Note): void{
     this.httpClient.delete<Note[]>(
      this.baseUrl + `/Notes/${note.id}`,
      this.httpOptions).subscribe(
        val => {
            console.error('PUT call successful value returned in body', val);
        },
        response => {
            console.error('PUT call in error', response);
        },
        () => {
            console.error('The PUT observable is now completed.');
        }
      );
  }

  getFilteredNotes(categId: string): Observable<Note[]> {
   return this.httpClient
    .get<Note[]>(
      this.baseUrl + `/notes/owner/${this.ownerId}`,
      this.httpOptions
    )
    .pipe(
      map((notes) => notes.filter((note) => note.category === categId))
    );
}

}
// old version
   /*changeCategoryOfNote(pressedNote: Note, newCategoryId: string): void{

    for(let i = 0; i < this.notes.length; i++) {
    if(this.notes[i].id === pressedNote.id){
      this.notes[i].category = newCategoryId;
       }
     }
   }*/
