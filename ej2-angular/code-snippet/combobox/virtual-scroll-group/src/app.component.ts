

import { Component } from '@angular/core';
import { ComboBoxComponent, VirtualScroll } from '@syncfusion/ej2-angular-dropdowns';

ComboBoxComponent.Inject(VirtualScroll);

@Component({
    selector: 'app-root',
    // specifies the virtual-scroll url path
    templateUrl: 'virtual-scroll.html'
})
export class AppComponent {
    // defined the array of data
    public records: { [key: string]: Object }[] = [];
    constructor() {
        for (let i = 1; i <= 150; i++) {
            let item: { [key: string]: Object } = {};
            item.id = 'id' + i;
            item.text = `Item ${i}`;
        
            // Generate a random number between 1 and 4 to determine the group
            const randomGroup = Math.floor(Math.random() * 4) + 1;
            switch (randomGroup) {
                case 1:
                    item.group = 'Group A';
                    break;
                case 2:
                    item.group = 'Group B';
                    break;
                case 3:
                    item.group = 'Group C';
                    break;
                case 4:
                    item.group = 'Group D';
                    break;
                default:
                    break;
            }
            this.records.push(item);
        }
    }
    // maps the appropriate column to fields property
    public fields: object = { groupBy: 'group', text: 'text', value: 'id' };
    // set the placeholder to AutoComplete input
    public waterMark: string = 'e.g. Item 1';
}


