import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
name:String="szilvia";
categoryId:String;

  constructor() { }

  ngOnInit(): void {
  }

  receiveFilterId(categoryId: string) {
    this.categoryId = categoryId;
    console.log(categoryId);
  }
}
