import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, DropDownListModule, ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the DropDownList component with change event
    template: `<ejs-dropdownlist #ddlelement id='ddlelement' #samples [dataSource]='data' [placeholder]='placeholder'></ejs-dropdownlist>`
})
export class AppComponent {
    constructor() {
        // bind the onscroll event to window
        window.onscroll = () => {
            this.dropDownListObject!.hidePopup();
        }
    }
    // defined the array of data
    public data: string[] = ['Badminton', 'Basketball', 'Cricket', 'Golf', 'Hockey', 'Rugby'];
    // set placeholder text to DropDownList input element
    public placeholder: string = 'Select a game';
    @ViewChild('ddlelement')
    public dropDownListObject?: DropDownListComponent;
}


