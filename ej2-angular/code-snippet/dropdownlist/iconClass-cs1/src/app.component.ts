

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the DropDownList component
    template: `<ejs-dropdownlist id='ddlelement' #samples [dataSource]='data' [fields]='fields' [placeholder]='text'></ejs-dropdownlist>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: { [key: string]: Object }[] = [
        { Class: 'asc-sort', Type: 'Sort A to Z', Id: '1' },
        { Class: 'dsc-sort', Type: 'Sort Z to A ', Id: '2' },
        { Class: 'filter', Type: 'Filter', Id: '3' },
        { Class: 'clear', Type: 'Clear', Id: '4' }];
    // map the icon column to iconCSS field.
    public fields: Object = { text: 'Type', iconCss: 'Class', value: 'Id' };
    //set the placeholder to DropDownList input
    public text: string = 'Select a format';
}


