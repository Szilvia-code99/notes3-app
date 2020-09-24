import { Directive, ElementRef, HostBinding } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Input } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[dirChangeColor]'
})
export class ChangeColorDirective  {
  @Input() backgroundColor:string = 'green';
  @Input() foregroundColor:string = 'blue';
  @HostBinding('style.backgroundColor') bgColor:string;
  @HostBinding('style.color') color:string;  
  @Input() hoverBackgroundColor:string = 'gray';
	@Input() hoverForegroundColor:string = 'orange';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(){
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
  this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');  
  this.bgColor = this.backgroundColor;		
	this.color = this.foregroundColor;
   }

   @HostListener('mouseenter') onMouseEnter(eventData: Event) {
		this.bgColor = this.hoverBackgroundColor;		
		this.color = this.hoverForegroundColor;				    	
  	}
}