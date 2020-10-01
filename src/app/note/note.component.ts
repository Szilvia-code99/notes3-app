import { NotExpr } from '@angular/compiler';
import { Input, OnChanges, Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Note} from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit , OnChanges{
 /*word:string='APPLE';
 number=1;
 result=1;
 numbers=["bor","palinka","sor","vodka","jager"];
  */
 subscription: Subscription;
 notes: Note[];
 note:Note={id:"10000000-0000-0000-0000-000000000000",title:"NewNote",text:"New Text",category:"1",ownerId:"00000000-0000-0000-0000-000000000009",textColor:"black",color:"pink",pinned:true};
 
 @Input() categoryId = 'nothing';

 constructor( private noteService: NoteService ) { }
  ngOnInit(): void {
   this.subscription = this.noteService.getNotes().subscribe((notes) => (this.notes = notes));
   this.noteService.deleteNote(this.note);
   //this.noteService.updateNoteCategory(this.note , '2');
  }

  ngOnChanges(): void{
    if(this.categoryId){
    this.noteService.getFilteredNotes(this.categoryId).subscribe((filteredNotes) => (this.notes = filteredNotes));
    }
  }

   disableToDoButton(note: Note){
    if (note.category === '3' || note.category === '2' || note.category === '1'){
       return true;
    } else {
      return false;
    }
  }
    disableDoingButton(note: Note){
      if (note.category === '2' || note.category === '3'){
         return true;
      } else {
        return false;
      }
  }

  disableDoneButton(note: Note){
    if(note.category === '3'){
       return true;
    } else {
      return false;
    }
  }

  changeCategoryToDoing(note: Note): void{
    this.noteService.updateNoteCategory(note, '2');
    this.subscription = this.noteService.getNotes().subscribe((notes) => (this.notes = notes));
    this.ngOnInit();
  }

  changeCategoryToDone(note: Note): void{
    this.noteService.updateNoteCategory(note, '3');
    this.subscription = this.noteService.getNotes().subscribe((notes) => (this.notes = notes));
    this.ngOnInit();
  }

  deleteNote(note: Note): void{
    this.noteService.deleteNote(note);
    this.subscription = this.noteService.getNotes().subscribe((notes) => (this.notes = notes));
    this.ngOnInit();
  }

}
