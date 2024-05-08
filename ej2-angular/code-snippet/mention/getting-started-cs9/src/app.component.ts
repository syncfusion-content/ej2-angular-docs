import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MentionModule } from '@syncfusion/ej2-angular-dropdowns'




import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, MentionModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag sport"></div>
  <ejs-mention [dataSource]='userData' [fields]='fields' [sortOrder]='sortOrder' [target]='mentionTarget'></ejs-mention>`,

})
export class AppComponent {
  constructor() {}
  public userData: { [key: string] : Object}[] = [
    { ID : "game1" ,Game : "Badminton"},
    { ID : "game2" ,Game : "Football" },
    { ID : "game3" ,Game : "Tennis"},
    { ID : "game4" ,Game : "Hockey"},
    { ID : "game5" ,Game : "Basketball"},
    { ID : "game6" ,Game : "Cricket"}
  ];
  public fields: Object = { text: 'Game' };
  public mentionTarget: string = '#mentionElement';
  public sortOrder: string = 'Descending';
}



