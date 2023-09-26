

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the MultiSelect component with dataSource
    template: `<ejs-multiselect id='multiselectelement' [dataSource]='data' [placeholder]='placeholder'></ejs-multiselect>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    // set placeholder to MultiSelect input element
    public placeholder: string = 'Select games';
}


