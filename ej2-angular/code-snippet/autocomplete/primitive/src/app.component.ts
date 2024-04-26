import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'




import { Component } from '@angular/core';
import { AutoCompleteComponent, VirtualScroll } from '@syncfusion/ej2-angular-dropdowns';

AutoCompleteComponent.Inject(VirtualScroll);

@Component({
imports: [
        FormsModule, AutoCompleteModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the virtual-scroll url path
    templateUrl: 'virtual-scroll.html'
})
export class AppComponent {
    // defined the array of data
    public records: string[] = [];
    constructor() {
        this.records = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];

    }
    // maps the appropriate column to fields property
    public fields: object = { value: 'text' };
    public value = "Item 11";
    // set the placeholder to AutoComplete input
    public waterMark: string = 'e.g. Item 1';
}



