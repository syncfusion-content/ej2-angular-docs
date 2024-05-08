import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, AutoCompleteModule, ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the AutoComplete component with dataSource
    template: `<ejs-autocomplete id='atcelement' [dataSource]='sportsData' [popupHeight]='height' [popupWidth]='width' [placeholder]='text'></ejs-autocomplete>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    // set width of the popup list
    public width: string = '250px';
    // set height of the popup list
    public height: string = '200px';
    // set placeholder to autocomplete element
    public text: string = "Find a game"
}


