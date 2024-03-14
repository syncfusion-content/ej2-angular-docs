

import { Component } from '@angular/core';
import { ComboBoxComponent } from '@syncfusion/ej2-angular-dropdowns';


@Component({
    selector: 'app-root',
    // specifies the virtual-scroll url path
    templateUrl: 'virtual-scroll.html'
})
export class AppComponent {
    // defined the array of data
    public records: { [key: string]: Object }[] = [];
    constructor() {
        for (let i: number = 1; i <= 150; i++) {
            const item: { [key: string]: Object } = {
                id: 'id' + i,
                text: `Item ${i}`,
            };
            this.records.push(item);
        }
    }
    // maps the appropriate column to fields property
    public fields: object = { text: 'text', value: 'id' };
    public value = {id: 'id11', text: 'Item 11'};
    // set the placeholder to AutoComplete input
    public waterMark: string = 'e.g. Item 1';
}


