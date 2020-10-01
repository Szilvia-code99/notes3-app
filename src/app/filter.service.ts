import { Injectable } from '@angular/core';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  categories: Category[] = [
    {name: 'To Do', id: '1'},
    {name: 'Done', id: '3'},
    {name: 'Doing', id: '2'}
    ];
  constructor() { }
  serviceCall(): void{
    console.log('Filter service was called');
  }
  getCategories(): Category[] {
  return this.categories;
  }
}
