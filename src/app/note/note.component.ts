import { Input, OnChanges, Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit } from '@angular/core';
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
 notes:Note[];
 colors:string[]=['salmon','yellow','palegreen','blue','purple','red','orange'];
 @Input() categoryId:String="nothing";

 //disableToDoButton=false;
 //disableDoingButton=false;
 //disableDoneButton=false;

  getRandomColor() {
   return this.colors[Math.floor(Math.random() * this.colors.length)]; 
  }

 constructor( private noteService: NoteService ) { }
  ngOnInit(): void {
   this.notes= this.noteService.getNotes();
   this.noteService.serializeObjectToJson()

  }

  ngOnChanges():void{
    if(this.categoryId){
      this.notes=this.noteService.getFilteredNotes(this.categoryId);
    }
  }

   disableToDoButton(note:Note){
    if(note.categoryId=="3" || note.categoryId=="2" ){
       return true;
    } else {
      return false;
    }
  }
    disableDoingButton(note:Note){
      if(note.categoryId=="2" || note.categoryId=="3"){
         return true;
      } else {
        return false;
      }
  }

  disableDoneButton(note:Note){
    if(note.categoryId=="3"){
       return true;
    } else {
      return false;
    }
  }

  changeCategoryToDoing(note:Note){
    this.noteService.changeCategoryOfNote(note,"2");
    console.log(note.categoryId);
  //  this.disableToDoButton(note);
   // this.notes= this.noteService.getNotes();
  }

  changeCategoryToDone(note:Note){
    console.log(this.notes[0].categoryId);
    console.log(this.notes[1].categoryId);
    this.noteService.changeCategoryOfNote(note,"3");
  

   // this.disableDoneButton(note);
    this.notes= this.noteService.getNotes();
    console.log(this.notes[0].categoryId);
    console.log(this.notes[1].categoryId);
}
}
