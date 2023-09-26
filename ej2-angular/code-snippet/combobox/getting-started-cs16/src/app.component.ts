

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for enable the autofill in ComboBox component
    template: `<ejs-combobox id='comboelement' #samples [dataSource]='data' [autofill]='true' [placeholder]='text'></ejs-combobox>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: string[] = ['Badminton', 'Basketball', 'Cricket', 'Golf', 'Hockey', 'Rugby'];
    // set placeholder text to ComboBox input element
    public text: string = 'Select a game';
}


