

import { Component } from '@angular/core';
import { MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';


@Component({
    selector: 'app-root',
    // specifies the virtual-scroll url path  
    templateUrl: 'virtual-scroll.html'
})
export class AppComponent {
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
    public value =  [{id: 'id11', text: 'Item 11'}, {id: 'id22', text: 'Item 22'}, {id: 'id33', text: 'Item 33'}];
    // set the placeholder to AutoComplete input
    public waterMark: string = 'e.g. Item 1';   
}


