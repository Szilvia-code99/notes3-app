import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNotesRandomColor]'
})
export class NotesRandomColorDirective implements OnInit{
  colors:string[]=['salmon','yellow','palegreen','blue','purple','red','orange'];
  constructor(private element: ElementRef) { }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor=this.getRandomColor();
  }

  //feri megoldas
  /* getRandomColor(){
     var color=Math.floor(0x1000000 * Math.random()).toString(16);
     return '#' + ('000000' + color).slice(-6);
   }
*/
   
  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)]; 
   }
 
}
