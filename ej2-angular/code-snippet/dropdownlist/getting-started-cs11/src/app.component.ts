

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the DropDownList component with dataSource
    template: `<ejs-dropdownlist id='ddlelement' [dataSource]='data' placeholder = 'Select a game'></ejs-dropdownlist>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: string[] = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];
}


