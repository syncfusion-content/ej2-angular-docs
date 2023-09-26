


import { Component, HostListener, ViewChild } from '@angular/core';
import { AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template: `<ejs-autocomplete id='atcelement' #samples [dataSource]='sportsData' [fields]='fields' [placeholder]='text'></ejs-autocomplete>`
})
export class AppComponent {
    @ViewChild('samples')
    public sports?: AutoCompleteComponent;
    constructor() {
    }
    public sportsData:{ [key: string]: Object }[] = [
        { Id: 'Game1', Game: 'Badminton' },
        { Id: 'Game2', Game: 'Basketball' },
        { Id: 'Game3', Game: 'Cricket' },
        { Id: 'Game4', Game: 'Football' },
        { Id: 'Game5', Game: 'Golf' },
        { Id: 'Game6', Game: 'Hockey' },
        { Id: 'Game7', Game: 'Rugby' },
        { Id: 'Game8', Game: 'Snooker' },
        { Id: 'Game9', Game: 'Tennis' }
    ];
    // maps the appropriate column to fields property
    public fields: Object ={ value: 'Game' };
    //set the placeholder to AutoComplete input
    public text: string = "Find a game";
    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.altKey && event.keyCode === 84 /* t */) {
            // press alt+t to focus the control.
            this.sports!.focusIn();
        }
    }
}



