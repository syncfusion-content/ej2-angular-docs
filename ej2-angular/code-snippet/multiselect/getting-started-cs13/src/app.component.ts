import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, MultiSelectModule, ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the MultiSelect component with dataSource
    template: `<ejs-multiselect id='multiselectelement' [dataSource]='data' [placeholder]='placeholder' [popupHeight]='popupHeight' [popupWidth]='popupWidth'></ejs-multiselect>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby'];
    // set placeholder to MultiSelect input element
    public placeholder: string = 'Select games';
    //set height to popup list
    public popupHeight:string = '200px';
    //set width to popup list
    public popupWidth:string = '250px';
}



