import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component, HostListener, ViewChild } from '@angular/core';
import { AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
    imports: [
        FormsModule, ReactiveFormsModule, AutoCompleteModule, ButtonModule
    ],


    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template: `<ejs-autocomplete id='atcelement' #samples [dataSource]='statusData' [fields]='fields' [placeholder]='text'></ejs-autocomplete>`
})
export class AppComponent {
    @ViewChild('samples')
    public status?: AutoCompleteComponent;
    constructor() {
    }
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
    //set the placeholder to AutoComplete input
    public text: string = "Select Status";
    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.altKey && event.keyCode === 84 /* t */) {
            // press alt+t to focus the control.
            this.status!.focusIn();
        }
    }
}



