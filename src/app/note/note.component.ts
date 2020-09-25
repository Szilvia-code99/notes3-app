import { Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Note} from '../note';

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
 notes: Note[] = [
  {
    id: "Id1",
    title: "First note",
    description: "This is the description for the first note"
  },
  {
    id: "Id1",
    title: "Second note",
    description: "This is the description for the second note"
  }
];


 constructor( ) { }
  ngOnInit(): void {
  }
}
