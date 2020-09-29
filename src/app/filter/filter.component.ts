import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  categories :Category[] ;
  @Output() filterEmitter: EventEmitter<string>=new EventEmitter<string>();
  

 sendFilterId(categoryId:string): void{
    this.filterEmitter.emit(categoryId);
  }
  constructor(private filterService:FilterService) { }

  ngOnInit(): void {
    this.categories=this.filterService.getCategories();
  }

  

}
