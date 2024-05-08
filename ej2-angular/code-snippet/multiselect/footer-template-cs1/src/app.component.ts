import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule,MultiSelectModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template url path
    templateUrl: 'template.html'
})
export class AppComponent {
    // create a object for MultiSelect
    constructor() {
    }
    // defined the array of data
    public data: Object[] = ['Badminton', 'Basketball', 'Cricket', 'Golf'];
    // set placeholder text to MultiSelect input element
    public text: string = 'Select a game';
}


