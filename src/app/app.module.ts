import { BrowserModule } from '@angular/platform-browser';
import { ChangeDetectionStrategy, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';
import { DummyModule } from './dummy-module/dummy.module';
import { NoteComponent } from './note/note.component';
import { ToolsComponent } from './tools/tools.component';
import{ MatButtonModule} from '@angular/material/button';
import{ MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { MatCardModule } from "@angular/material/card";
import { AddHyphenPipe } from './add-hyphen.pipe';
import { ChangeColorDirective } from './change-color.directive';
import { AddNoteComponent } from './add-note/add-note.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NoteService } from './note.service';
import { FilterService } from './filter.service';

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
  declarations: [
    AppComponent,DummyComponentComponent, NoteComponent, ToolsComponent, FilterComponent, AddHyphenPipe, ChangeColorDirective, AddNoteComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DummyModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ NoteService,FilterService ],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
