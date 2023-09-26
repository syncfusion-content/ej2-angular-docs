


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template: `<ejs-autocomplete id='atcelement' [dataSource]='sortFormatData' [fields]='fields' [placeholder]='text'></ejs-autocomplete>`
})

export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public sortFormatData: { [key: string]: Object }[] = [
    { Class: 'asc-sort', Type: 'Sort A to Z', Id: '1' },
    { Class: 'dsc-sort', Type: 'Sort Z to A ', Id: '2' },
    { Class: 'filter', Type: 'Filter', Id: '3' },
    { Class: 'clear', Type: 'Clear', Id: '4' }
    ];
    // maps the appropriate column to fields property
    public fields: Object = { value: 'Type', iconCss: 'Class' };
    // set the placeholder to the AutoComplete input
    public text: string = "Find a format";
}



