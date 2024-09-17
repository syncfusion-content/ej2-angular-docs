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
  <ejs-mention [dataSource]='statusData' [fields]='fields' [target]='mentionTarget'></ejs-mention>`,

})
export class AppComponent {
  constructor() {}
  public statusData: { [key: string]: Object }[] = [
    { "Status": "Open", "State": false },
    { "Status": "Waiting for Customer", "State": false },
    { "Status": "On Hold", "State": true },
    { "Status": "Follow-up", "State": false },
    { "Status": "Closed", "State": true },
    { "Status": "Solved", "State": false },
    { "Status": "Feature Request", "State": false }
  ];
  // maps the appropriate column to fields property
  public fields: Object = { value: 'Status', disabled: 'State' };
  public mentionTarget: string = '#mentionElement';
}



