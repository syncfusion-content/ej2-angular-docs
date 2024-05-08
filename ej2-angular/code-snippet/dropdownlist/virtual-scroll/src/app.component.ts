import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component } from '@angular/core';
import { DropDownListComponent, VirtualScroll } from '@syncfusion/ej2-angular-dropdowns';

DropDownListComponent.Inject(VirtualScroll);

@Component({
imports: [
        FormsModule,DropDownListModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the virtual-scroll url path  
    templateUrl: 'virtual-scroll.html'
})
export class AppComponent {
public records: { [key: string]: Object }[] = [];
    constructor() {
        for (let i: number = 1; i <= 150; i++) {
            const item: { [key: string]: Object } = {
                id: 'id' + i,
                text: `Item ${i}`,
            };
            this.records.push(item);
        }
    }
    // maps the appropriate column to fields property
    public fields: object = { text: 'text', value: 'id' };
    // set the placeholder to AutoComplete input
    public waterMark: string = 'e.g. Item 1';   
}


