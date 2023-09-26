

import { Component, HostListener, ViewChild } from '@angular/core';
import { ComboBoxComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-root',
    // specifies the template string for the ComboBox component with change event
    template: `<ejs-combobox id='comboelement' #samples [dataSource]='data' [placeholder]='text' [popupHeight]='height'></ejs-combobox>`
})
export class AppComponent {
    @ViewChild('samples')
    public sports?: ComboBoxComponent;
    constructor() {
    }
    // defined the array of data
    public data: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    // set placeholder to ComboBox input element
    public text: string = "Select a game";
    // set the popup list height
    public height: string = '200px';
    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.altKey && event.keyCode === 84 /* t */) {
            // press alt+t to focus the control.
            this.sports!.focusIn();
        }
    }
}


