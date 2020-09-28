import { Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {
 /*word:string='APPLE';
 number=1;
 result=1;
 numbers=["bor","palinka","sor","vodka","jager"];
  */
 notes:Note[];
 colors:string[]=['salmon','yellow','palegreen','blue','purple','red','orange'];

  getRandomColor() {
   return this.colors[Math.floor(Math.random() * this.colors.length)]; 
  }

 constructor( private noteService: NoteService ) { }
  ngOnInit(): void {
   this.notes= this.noteService.getNotes();
  }
}
