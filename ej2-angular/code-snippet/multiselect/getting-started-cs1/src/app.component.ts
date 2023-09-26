


import { Component, HostListener,ViewChild } from '@angular/core';
import { MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
    selector: 'app-root',
    // specifies the template string for the MultiSelect component
    template: `<ejs-multiselect id='multiselectelement' #samples [dataSource]='gameList' [fields]='fields'[placeholder]='placeholder' [popupHeight]='height'></ejs-multiselect>`
})
export class AppComponent {
    @ViewChild('samples')
    public sports?: MultiSelectComponent;
    constructor() {
    }
    //set the data to dataSource property
    public gameList: Object[] =  [
        { id: 'Game1', game: 'Badminton' },
        { id: 'Game2', game: 'Basketball' },
        { id: 'Game3', game: 'Cricket' },
        { id: 'Game4', game: 'Football' },
        { id: 'Game5', game: 'Golf' }
    ];
    // maps the appropriate column to fields property
    public fields: Object = { text: 'game', value: 'id' };
    // set the popup list height
    public height: string = '200px';
    // set placeholder to MultiSelect input element
    public placeholder: string = 'Select games';
    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.altKey && event.keyCode === 84 /* t */) {
            // press alt+t to focus the control.
            this.sports!.focusIn();
        }
    }
}



