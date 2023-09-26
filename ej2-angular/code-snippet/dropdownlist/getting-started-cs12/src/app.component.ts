

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template url path
    template: `<ejs-dropdownlist id='ddlelement' [dataSource]='data' placeholder='Select a game' popupHeight='200px' popupWidth='250px' ></ejs-dropdownlist>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby', 'Snooker','Tennis'];
}


