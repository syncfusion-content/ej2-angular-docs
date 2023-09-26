

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the ComboBox component with dataSource
    template: `<ejs-combobox id='comboelement' [dataSource]='data' placeholder = 'Select a game' floatLabelType="Auto"></ejs-combobox>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: string[] = ['Cricket', 'Football', 'Rugby', 'Snooker', 'Tennis'];
}


