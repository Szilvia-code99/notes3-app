import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { FilterService } from '../filter.service';
import { NoteService } from '../note.service';

@Component({
  selector: 'add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
noteTitle: string;
noteDescription: string;
categories: Category[];
idCategoryNote: string;
noteColor: string;
textColor: string;
colors: string[] = ['salmon', 'yellow', 'palegreen', 'blue', 'purple', 'red', 'orange' , 'white', 'black'];


  constructor(
    private filterService: FilterService,
    private noteService: NoteService ) { }

  ngOnInit(): void {
    this.categories = this.filterService.getCategories();
  }

  addNote(): void{
    this.noteService.addNote(this.noteTitle, this.noteDescription , this.textColor, this.noteColor, this.idCategoryNote);
  }



}
