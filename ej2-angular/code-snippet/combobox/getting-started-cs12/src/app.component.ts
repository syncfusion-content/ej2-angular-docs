

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the ComboBox component with dataSource
    template: `<ejs-combobox id='comboelement' [dataSource]='sportsData' [fields]=fields allowCustom=true placeholder = 'Select a game'></ejs-combobox>`
})
export class AppComponent {
    constructor() {
    }
    public fields: Object = {text: 'Game', value: 'Id'};
    // defined the array of data
    public sportsData: { [key: string]: Object }[] = [
        { Id: 'game1', Game: 'Badminton' },
        { Id: 'game2', Game: 'Football' },
        { Id: 'game3', Game: 'Tennis' }
    ];
}


