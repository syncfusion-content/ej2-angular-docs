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
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='userData' [target]='mentionTarget' [fields]='fields'></ejs-mention>`,
  

})
export class AppComponent {
  constructor() {
  }
  public userData: { [key: string]: Object }[] = [
    { Name : "Andrew Fuller", ID : "1" },
    { Name : "Anne Dodsworth" , ID : "2" },
    { Name : "Janet Leverling" , ID :  "3" },
    { Name : "Laura Callahan" , ID : "4" },
    { Name : "Margaret Peacock" , ID : "5" }
  ];
  public fields: Object = {text:'Name'};
  public mentionTarget: string = "#mentionElement";
}



