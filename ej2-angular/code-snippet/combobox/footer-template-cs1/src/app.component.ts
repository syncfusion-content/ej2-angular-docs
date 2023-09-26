

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template url path
    templateUrl: 'template.html'
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: Object[] = ['Badminton', 'Basketball', 'Cricket', 'Hockey', 'Golf'];
    // set placeholder text to ComboBox input element
    public text: string = 'Select a game';
}


