import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
  {
     path:"", component: HomeComponent, pathMatch:"full" 
  },
  {
    path: "app-dummy-component/:name", component: DummyComponentComponent
 },
  {
     path: "add-note", component: AddNoteComponent
  },
  { 
    path: '**', redirectTo: ''
  }

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
