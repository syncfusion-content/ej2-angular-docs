import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component, HostListener, ViewChild } from '@angular/core';
import { ComboBoxComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
    imports: [
        FormsModule, ReactiveFormsModule, ComboBoxModule, ButtonModule
    ],


    standalone: true,
    selector: 'app-root',
    // specifies the template string for the ComboBox component
    template: `<ejs-combobox id='comboelement' [allowResize]='allowResize' #samples [dataSource]='statusData' [fields]='fields' [placeholder]='text'></ejs-combobox>`
})
export class AppComponent {
    @ViewChild('samples')
    public status?: ComboBoxComponent;
    constructor() {
    }
    public statusData: { [key: string]: Object }[] = [
        { "Status": "Open", "State": false },
        { "Status": "Waiting for Customer", "State": false },
        { "Status": "On Hold", "State": true },
        { "Status": "Follow-up", "State": false },
        { "Status": "Closed", "State": true },
        { "Status": "Solved", "State": false },
        { "Status": "Feature Request", "State": false },
        { "Status": "In Progress", "State": false },
        { "Status": "Pending", "State": true },
        { "Status": "Escalated", "State": true },
        { "Status": "New", "State": false },
        { "Status": "Under Review", "State": true },
        { "Status": "Reopened", "State": false },
        { "Status": "Approved", "State": true },
        { "Status": "Awaiting Approval", "State": false },
        { "Status": "Scheduled", "State": false },
        { "Status": "Canceled", "State": true },
        { "Status": "Completed", "State": true },
        { "Status": "Acknowledged", "State": false },
        { "Status": "In Development", "State": false }
    ];
    // maps the appropriate column to fields property
    public fields: Object = { value: 'Status'};
    // set true for enable the resize property to AutoComplete
    public allowResize: boolean = true;
    //set the placeholder to ComboBox input
    public text: string = "Select Status";
    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.altKey && event.keyCode === 84 /* t */) {
            // press alt+t to focus the control.
            this.status!.focusIn();
        }
    }
}



