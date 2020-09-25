import { Directive, ElementRef, HostBinding } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Input } from '@angular/core';
import { HostListener } from '@angular/core';

//@Directive requires a CSS selector to identify the HTML in the template that is associated with the directive.
//The CSS selector for an attribute name in square brackets. Here, the directive's selector is [dirChangeColor].

@Directive({
  selector: '[dirChangeColor]'
})

export class ChangeColorDirective  {

  //Input allows data to flow from the binding expression into the directive.
  @Input() backgroundColor:string = 'green';
  @Input() foregroundColor:string = 'blue';
  @HostBinding('style.backgroundColor') bgColor:string;
  @HostBinding('style.color') color:string;  
  @Input() hoverBackgroundColor:string = 'gray';
	@Input() hoverForegroundColor:string = 'orange';
  
  //Angular creates a new instance of the directive's contorller class for each matching element.
  //injecting an Angular ElementRef into the constructor
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(){
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
  this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');  
  this.bgColor = this.backgroundColor;		
	this.color = this.foregroundColor;
   }

   @HostListener('mouseenter') onMouseEnter(eventData: Event) {
     //first tries to highlight with the highlightColor, then with the defaultColor...
		this.bgColor = this.hoverBackgroundColor;		
		this.color = this.hoverForegroundColor;				    	
  	}
}