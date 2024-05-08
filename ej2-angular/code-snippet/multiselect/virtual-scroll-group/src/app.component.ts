import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component } from '@angular/core';
import { MultiSelectComponent, VirtualScroll } from '@syncfusion/ej2-angular-dropdowns';

MultiSelectComponent.Inject(VirtualScroll);

@Component({
imports: [
        FormsModule,MultiSelectModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the virtual-scroll url path  
    templateUrl: 'virtual-scroll.html'
})
export class AppComponent {
public records: { [key: string]: Object }[] = [];
    constructor() {
        for (let i = 1; i <= 150; i++) {
            let id = 'id' + i;
            let text = `Item ${i}`;
            let group = 'Group A';

            // Generate a random number between 1 and 4 to determine the group
            const randomGroup = Math.floor(Math.random() * 4) + 1;
            switch (randomGroup) {
                case 1:
                    group = 'Group A';
                    break;
                case 2:
                    group = 'Group B';
                    break;
                case 3:
                    group = 'Group C';
                    break;
                case 4:
                    group = 'Group D';
                    break;
                default:
                    break;
            }
            this.records.push({id, text, group});
        }
    }
    // maps the appropriate column to fields property
    public fields: object = { groupBy: 'group', text: 'text', value: 'id' };
    // set the placeholder to AutoComplete input
    public waterMark: string = 'e.g. Item 1';   
}


