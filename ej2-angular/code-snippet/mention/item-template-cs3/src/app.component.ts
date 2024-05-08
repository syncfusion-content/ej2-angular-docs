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
  <ejs-mention [dataSource]='userData' [target]='mentionTarget' [noRecordsTemplate]='noRecordsTemplate' ></ejs-mention>`,

})
export class AppComponent {
  constructor() {
  }
  public userData: string[] = [];
  public mentionTarget: string = "#mentionElement";
  public noRecordsTemplate: any = "<span class='norecord'> NO DATA AVAILABLE</span>"
}



