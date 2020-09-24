import { Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {
 word:string='APPLE';
 number=1;
 result=1;

 numbers=["bor","palinka","sor","vodka","jager"];
  constructor( ) { }
  ngOnInit(): void {
  }
}
