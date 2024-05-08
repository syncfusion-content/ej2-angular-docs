import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule,ComboBoxModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template url path
    templateUrl: 'template.html'
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: Object[] = ['Badminton', 'Basketball', 'Cricket', 'Hockey', 'Golf'];
    // set placeholder text to ComboBox input element
    public text: string = 'Select a game';
}


