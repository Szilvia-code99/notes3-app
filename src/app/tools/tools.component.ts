import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
title:string ="Add";
titleColor:string="red";
noteContent:string="";

constructor() { }

ngOnInit(): void {
}

  setTitle(): void { 
     this.title="test";
  }

  setBackground(color:string):void{
    this.titleColor=color;
  }
}
