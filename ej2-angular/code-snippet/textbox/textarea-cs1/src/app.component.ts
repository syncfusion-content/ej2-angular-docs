import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'




import { Component, ViewChild } from '@angular/core';

@Component({
imports: [
         FormsModule, TextBoxModule
    ],


standalone: true,
    selector: 'app-container',
    styleUrls: ['./index.css'],
    template: `<div class="multiline">
                <ejs-textbox [multiline]='true' value= 'Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center' ></ejs-textbox>
               </div>
              `
})
export class AppComponent {
    constructor() {
    }
}



