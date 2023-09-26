

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the ComboBox component with value property
    template: `<ejs-combobox id='comboelement' #samples [dataSource]='data' placeholder='Select a game' popupHeight='200px' popupWidth='250px'></ejs-combobox>`
})
export class AppComponent {
    constructor() {
    }
    // define the array of data
    public data: string[] = ['Cricket', 'Football', 'Golf', 'Rugby', 'Snooker', 'Tennis'];
}


