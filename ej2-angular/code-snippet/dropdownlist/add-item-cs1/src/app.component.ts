

import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'control-content',
    // specifies the template path for DropDownList component
    templateUrl: `add.html`
})
export class AppComponent {
    constructor() {
    }
    ngAfterViewInit() {
         // add item at first
        document.getElementById('first')!.onclick = () => {
            (this.dropDownListObject as any).addItem({Id: 'game0', Game: 'Hockey'}, 0);
        }

        // add item in between
        document.getElementById('between')!.onclick = () => {
            (this.dropDownListObject as any).addItem({Id: 'game4', Game: 'Golf'}, 2);
        }

        // add item at last
        document.getElementById('last')!.onclick = () => {
            (this.dropDownListObject as any).addItem({Id: 'game5', Game: 'Cricket'});
        }
    }
    // defined the array of data
    public data: { [key: string]: Object }[] = [ { Id: 'game1', Game: 'Badminton' },
                 { Id: 'game2', Game: 'Football' }, { Id: 'game3', Game: 'Tennis' }];
    // maps the appropriate column to fields property
    public fields: Object = { text: 'Game', value: 'Id' };
    //set the placeholder to DropDownList input
    public text: string = "Select a game";
    @ViewChild('ddlelement')
    public dropDownListObject = DropDownListComponent;
}


