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
    template: `<label class="label">float label type auto</label>
                <div class="multiline">
                <ejs-textbox [multiline]='true' floatLabelType='Auto' placeholder='Enter your address' ></ejs-textbox>
               </div>
               <label class="label">float label type always</label>
               <div class="multiline">
                <ejs-textbox [multiline]='true' floatLabelType='Always' placeholder='Enter your address' ></ejs-textbox>
               </div>
               <label class="label">float label type never</label>
               <div class="multiline">
                <ejs-textbox [multiline]='true' floatLabelType='Never' placeholder='Enter your address' ></ejs-textbox>
               </div>
              `
})
export class AppComponent {
    constructor() {
    }
}



