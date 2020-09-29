import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
  notes: Note[] = [
    {
      id: "Id1",
      title: "First note",
      description: "This is the description for the first note",
      categoryId:"1"
    },
    {
      id: "Id2",
      title: "Second note",
      description: "This is the description for the second note",
      categoryId:"2"
    }
  ];
  
  constructor() { }

  serviceCall() {
    console.log("Note service was called");
  }
  
  getNotes(): Note[] {
  return this.notes;
  }
  
  getFilteredNotes(categId:String): Note[]{
    let filteredNotes=this.notes.filter((note)=>note.categoryId===categId);
    return filteredNotes;
  }
  
   changeCategoryOfNote(pressedNote:Note,newCategoryId:string){

    for(let i = 0; i < this.notes.length; i++){
    if(this.notes[i].id==pressedNote.id){
      this.notes[i].categoryId=newCategoryId;
       }
     }
   }

   serializeObjectToJson(){
    /*var fs = require('fs');
    let json = JSON.stringify(this.notes[0]);
    fs.writeFile('./notes.json', json, 'utf8');*/
   }
}
