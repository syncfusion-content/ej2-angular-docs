

import { Component, HostListener, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-root',
    // specifies the template string for the DropDownList component with change event
    template: `<ejs-dropdownlist id='ddlelement' #samples [dataSource]='data' [placeholder]='text' [popupHeight]='height'></ejs-dropdownlist>`
})
export class AppComponent {
    @ViewChild('samples')
    public sports?: DropDownListComponent;
    constructor() {
    }
    // defined the array of data
    public data: string[] = ['Badminton', 'Basketball', 'Cricket', 'FootBall', 'Golf', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    // set placeholder to DropDownList input element
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


